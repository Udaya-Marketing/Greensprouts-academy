export type FeedbackGender = "female" | "male" | "neutral";

export interface StudentFeedbackEntry {
  name: string;
  gender: FeedbackGender;
  rating: number;
  text: string;
  course: string;
  show?: boolean;
}

export const NORMALIZE_NAME_CASE = true;

export const STUDENT_FEEDBACK: StudentFeedbackEntry[] = [
  { name: "S Jenisha Mary", gender: "female", rating: 5, text: "Well explained ✅ Very informative ✨ Learnt in depth about Hydroponics Thank You", course: "" },
  { name: "SUBATHARANI.S", gender: "female", rating: 5, text: "U have rectified our doubts which makes me more comfortable", course: "" },
  { name: "SAHARINI.S", gender: "female", rating: 5, text: "You responsed and cleared our doubts in a proper manner", course: "" },
  { name: "K Divyadharshini", gender: "female", rating: 5, text: "realizing the plants can grow without soil using just nutrient rich water", course: "" },
  { name: "Nisha Kumari", gender: "female", rating: 4, text: "Pest and diseases control", course: "" },
  { name: "Mansi kumari", gender: "female", rating: 5, text: "Very valuable class and learned about the Economic of scale", course: "" },
  { name: "MOHAMED ASIM MURSHID P I", gender: "male", rating: 5, text: "Controlling the plant's root-zone environment & Value chain dynamics and margin distribution.", course: "" },
  { name: "Gaurav G Mehta", gender: "male", rating: 4, text: "Learning the economics of hydroponic farming", course: "" },
  { name: "Aisunny Shihab", gender: "male", rating: 4, text: "Classes was worthy", course: "" },
  { name: "G. Bharathipriya", gender: "female", rating: 5, text: "My 'Aha!' moment today was realizing that precise nutrient and pH management are the key factors that determine plant growth and yield in hydroponics and understanding how a polyhouse creates a controlled environment that improves crop growth and productivity.", course: "" },
  { name: "Arunaselvi B", gender: "female", rating: 4, text: "When I heard that i can sell the hydroponic plants in my locality restuarants because before this, i thought it can only be exported", course: "" },
  { name: "Naveenkumar.K", gender: "male", rating: 4, text: "I have understood everything clearly", course: "" },
  { name: "Mugesh S K", gender: "male", rating: 5, text: "Everything about the topics is taken nicely", course: "" },
  { name: "Pushparaj", gender: "male", rating: 5, text: "I thought it will be basic but unexpectedly I learned more information about poly house farming", course: "" },
  { name: "KARTHI", gender: "male", rating: 4, text: "Learned New thing new world -hydroponics", course: "" },
  { name: "Swornambhika R", gender: "female", rating: 5, text: "It took me back to my college days, and i felt like being part of an agri family again", course: "" },
  { name: "Sanjay Jayaraman", gender: "male", rating: 5, text: "The way you explained and broke down the concepts.", course: "" },
  { name: "Minu Grace I", gender: "female", rating: 4, text: "Visiting the farm and its grwing crops through online", course: "" },
  { name: "Pratheeksha L Naik", gender: "female", rating: 5, text: "Entire session neatly managed and coordinated", course: "" },
  { name: "ANUSHA R", gender: "female", rating: 4, text: "I came to know about the various new techniques which i could implement and disseminate to my students", course: "" },
  { name: "P. MANIVASAGAM", gender: "male", rating: 5, text: "It was amazing to learn how to grow plants using only water, without any soil.", course: "" },
  { name: "N.JEMIRKHAN", gender: "male", rating: 5, text: "I understood how hydroponics helps plants grow faster without soil by directly supplying nutrients.", course: "" },
  { name: "SHAIK HASEENA", gender: "female", rating: 4, text: "Ihad an “Aha!” moment in my online class when I finally understood the topic clearly", course: "" },
  { name: "Naveenkumar. M", gender: "male", rating: 5, text: "My \"Aha!\" moment today was realizing that I can help users with their questions by following specific instructions.", course: "" },
  { name: "Tamilarasan R.V", gender: "male", rating: 5, text: "My “Aha!” moment today was understanding that staying consistent matters more than being perfect.", course: "" },
  { name: "S Jenisha Mary", gender: "female", rating: 5, text: "Well explained ✅ Very informative ✨ Learnt in depth about Hydroponics Thank You", course: "", show: false },
  { name: "SUBATHARANI.S", gender: "female", rating: 5, text: "U have rectified our doubts which makes me more comfortable", course: "", show: false },
  { name: "SAHARINI.S", gender: "female", rating: 5, text: "You responsed and cleared our doubts in a proper manner", course: "", show: false },
  { name: "K Divyadharshini", gender: "female", rating: 5, text: "realizing the plants can grow without soil using just nutrient rich water", course: "", show: false },
  { name: "Devi Esakkiammal S", gender: "female", rating: 4, text: "It's something to know that many people are doing hydroponics and theya re getting profit in simple leafy vegetables", course: "" },
  { name: "VISHWADHAR R", gender: "male", rating: 4, text: "I LIKED THE FINANCIAL TOPIC WHICH IS VERY USEFUL FOR ME", course: "" },
  { name: "Gayathri V", gender: "female", rating: 5, text: "Complete step-by-step procedure was given in a commendable way 🙋🏽‍♀️", course: "" },
  { name: "Subatharani S", gender: "female", rating: 5, text: "Your session makes me confident to do project about microgreens", course: "" },
  { name: "NARAYANABABU.M", gender: "male", rating: 4, text: "Each session were excellent mostly about the economic part", course: "" },
  { name: "SUHAINI N", gender: "female", rating: 5, text: "The overall session was so good and explained deeply .", course: "" },
  { name: "KEERTHANA S", gender: "female", rating: 4, text: "I am really grateful that you covered the basic investment, economics and future prospects in it which is very useful.", course: "" },
  { name: "R. M. SOLARASAN", gender: "male", rating: 4, text: "I learned a lot from this hydroponics session, thank you.", course: "" },
  { name: "Dr Yusuf Chunawala", gender: "male", rating: 5, text: "Most amazing lecture will be in touch for many more", course: "" },
  { name: "Bhavani Bhuvaneswari", gender: "female", rating: 4, text: "Overall it gave good ideas to beginners", course: "" },
];
