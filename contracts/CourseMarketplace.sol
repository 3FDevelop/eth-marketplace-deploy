// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CourseMarketplace {
    enum State {
        Purchased,
        Activated,
        Deactivated
    }

    bool public isStoped = false;

    // mapping of courseHash to Course data
    mapping(bytes32 => Course) private ownedCourses;

    // mapping of courseID to courseHash
    mapping(uint => bytes32) private ownedCourseHash;

    // number of all courses + id of the course
    uint private totalOwnedCourses;

    address payable private owner;

    constructor(){
        setContractOwner(msg.sender);
    }

    /// Course has already a Owner!
    error CourseHasOwner();
    /// Only owner has an access!
    error OnlyOwner();
    /// Course has invalid state;
    error InValidState();
    /// Course is not created;
    error CourseIsNotCreated();
    /// Sender is not course owner!
    error SenderIsNotCourseOwner();

    modifier onlyOwner(){
        if(msg.sender != getContractOwner()){
            revert OnlyOwner();
        }
        _;
    }
    modifier onlyWhenNotStopped(){
        require(!isStoped);
         _;
    }
    modifier onlyWhenStopped(){
        require(isStoped);
         _;
    }
    // Contract can recieve ether
    receive() external payable {}

    function withdraw(uint amount) external onlyOwner{
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Transfer failded");   
    }

    function emergencyWithdraw() external onlyWhenStopped onlyOwner {
        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success, "Transfer failded");   
    }

    function selfDestruct() external onlyWhenStopped onlyOwner{
        selfdestruct(owner);
    }

    function stopContract() 
        external 
        onlyOwner{
        isStoped = true;
    }

    function resumeContract() 
        external 
        onlyOwner{
        isStoped = false;
    }

    struct Course {
        uint id; // 32 
        uint price; // 32
        bytes32 proof; // 32
        address owner; // 20 
        State state; // 1
    }

    function purchaseCourse(
        bytes16 courseId,
        bytes32 proof
    ) external payable onlyWhenNotStopped {
        bytes32 courseHash = keccak256(abi.encodePacked(courseId, msg.sender));
        uint id = totalOwnedCourses++;

        if(hasCourseOwnerShip(courseHash)){
            revert CourseHasOwner();
        }

        ownedCourseHash[id] = courseHash;
        ownedCourses[courseHash] = Course({
            id: id,
            price: msg.value,
            proof: proof,
            owner: msg.sender,
            state: State.Purchased
        });
    }

    function repurchaseCourse(bytes32 courseHash) external payable onlyWhenNotStopped{
        if(!isCourseCreated(courseHash)){
            revert CourseIsNotCreated();
        }
        if(!hasCourseOwnerShip(courseHash)){
            revert SenderIsNotCourseOwner();
        }

        Course storage course = ownedCourses[courseHash];

        if(course.state != State.Deactivated){
            revert InValidState();
        }

        course.state = State.Purchased;
        course.price = msg.value;

    }

    function activateCourse(bytes32 courseHash)external onlyWhenNotStopped onlyOwner{

        if(!isCourseCreated(courseHash)){
            revert CourseIsNotCreated();
        }

        Course storage course = ownedCourses[courseHash];

        if(course.state != State.Purchased){
            revert InValidState();
        }

        course.state = State.Activated;

    }

    function deactivateCourse(bytes32 courseHash)external onlyWhenNotStopped onlyOwner{

        if(!isCourseCreated(courseHash)){
            revert CourseIsNotCreated();
        }

        Course storage course = ownedCourses[courseHash];

        if(course.state != State.Purchased){
            revert InValidState();
        }

        // Send back amount of course if we deactivate the course
        (bool success, ) = course.owner.call{value: course.price}("");
        require(success, "Transfer failed!");
        //

        course.state = State.Deactivated;
        course.price = 0;
    }

    function transferOwnerShip(address newOwner) external onlyOwner{
        setContractOwner(newOwner);
    }

    function getCourseCount() external view returns(uint){
        return totalOwnedCourses;
    }

    function getCourseHashAtIndex(uint index) external view returns (bytes32){
        return ownedCourseHash[index];
    }

    function getCourseByHash(bytes32 courseHash) external view returns (Course memory){
        return ownedCourses[courseHash];
    }
    
    function getContractOwner() public view returns(address){
        return owner;
    }

    function isCourseCreated(bytes32 courseHash) private view  returns(bool){
        return ownedCourses[courseHash].owner != 0x0000000000000000000000000000000000000000;
    }

    function setContractOwner(address newOwner) private {
        owner = payable(newOwner);
    }

    function hasCourseOwnerShip(bytes32 courseHash) private view returns(bool){
        return ownedCourses[courseHash].owner == msg.sender;
    }

}