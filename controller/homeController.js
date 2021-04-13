const Question = require("../models/questions")
const moment = require("moment")

const getLandingPage = (req, res) => {
    date = moment().format("YYYY-MM-DD")
    res.render("landing_page", {date})
}

const getQuizPage = async (req, res) => {
    const {date, queNo} = req.params
    try {
        let intQueNo = parseInt(queNo)
        if(moment(date, "YYYY-MM-DD").isValid()){
            // adding 1 day to date
            let plusOneDate = new Date(date);
            plusOneDate.setDate(plusOneDate.getDate() + 1);

            const questions = await Question.find({date : { "$gte": new Date(date), "$lt": new Date(plusOneDate)}})
            if(questions.length === 0 || intQueNo >= questions.length){
                throw error
            }else{
                res.render("quiz_page", {questions, queNo: intQueNo, moment})
            }  
    
        }else{
            res.redirect('/')
        }
    } catch (error) {
        res.redirect('/')
    }
}

module.exports = {
    getLandingPage,
    getQuizPage
}