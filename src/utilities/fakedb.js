export { setDataInLocal, getDataInLocal, addToDb, getAppliedJob, removeFromDb }
const setDataInLocal=(id)=>{
localStorage.setItem('job-id',id)

}
const getDataInLocal=()=>{
    return localStorage.getItem('job-id')
}
const addToDb = id => {
    let appliedJobId = getAppliedJob();
   
    const quantity = appliedJobId[id];
    if (!quantity) {
        appliedJobId[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        appliedJobId[id] = newQuantity;
    }
    localStorage.setItem('applied-JobId', JSON.stringify(appliedJobId));
}

const removeFromDb = id => {
    const appliedJobId = getAppliedJob();
    if (id in appliedJobId) {
        delete appliedJobId[id];
        localStorage.setItem('applied-JobId', JSON.stringify(appliedJobId));
    }
}
const getAppliedJob = () => {
    let appliedJobId = {};

    //get the applied job from local storage
    const storedJob = localStorage.getItem('applied-JobId');
    if (storedJob) {
        appliedJobId = JSON.parse(storedJob);
    }
    return appliedJobId;
}