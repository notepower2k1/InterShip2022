import rootInstance from "./utilsService/rootInstance";


const getTotalsPostPerMonth =  (year) => {
    return rootInstance.get("/statistics/post-per-month/"+year);
}

const getTotalsCommentsPerMonth =  (year) => {
    return rootInstance.get("/statistics/comment-per-month/"+year);
}
const getTotalsReplyPerMonth =  (year) => {
    return rootInstance.get("/statistics/reply-per-month/"+year);
}
const getTotalsUserPerMonth =  (year) => {
    return rootInstance.get("/statistics/user-per-month/"+year);
}
const StatisticsService = {
    getTotalsPostPerMonth,
    getTotalsCommentsPerMonth,
    getTotalsReplyPerMonth,
    getTotalsUserPerMonth
};
  
export default StatisticsService;