import React from "react"

const persionData = {
   Header: {
      Home: "خانه",
      About: "درباره",
      Works: "کارها",
      Testimonials: "نقل قول",
      Contact: "ارتباط",
      Content:
         "ما از جدیدترین فناوری برای ایجاد محصولات جدید در زمینه اینترنت اشیا استفاده می کنیم. تیم ما از چهار نفر تشکیل شده است که هر یک از نظر تخصص خود عالی هستند ",
   },
   About: {
      Title1: "درباره ما",
      Paragraph1:
         "ما از جدیدترین فناوری برای ایجاد محصولات جدید در زمینه اینترنت اشیا استفاده می کنیم. تیم ما از چهار نفر تشکیل شده است که هر یک از نظر تخصص خود عالی هستند ",

      Title2: "اطلاعات تماس",
   },
   Portfolio: {
      Title: "برخی از کار های ما را مشاهده کنید",
   },
   Testimonials: {
      Paragraph1:
         "ما از جدیدترین فناوری برای ایجاد محصولات جدید در زمینه اینترنت اشیا استفاده می کنیم. تیم ما از چهار نفر تشکیل شده است که هر یک از نظر تخصص خود عالی هستند ",

      Paragraph2:
         "اینترنت اشیا به اختصار آی‌اوتی ه‌طور کلی اشاره دارد به اشیا و تجهیزات محیط پیرامون‌مان که به شبکه اینترنت متصل شده و توسط اپلیکیشن‌های موجود در تلفن‌های هوشمند و تبلت قابل کنترل و مدیریت هستند.به زبان ساده، ارتباط سنسورها و دستگاه‌ها با شبکه‌ای است که از طریق آن می‌توانند با یکدیگر و با کاربرانشان تعامل کنند",
   },
   Contact: {
      Title: "پیام خود را برای ما بفرستید ",
      Name: "نام",
      Email: "ایمیل",
      Subject: "موضوع",
      Message: "پیام",
      Title2: "آدرس و شماره تلفن",
      Phone: "تلفن",
      Submit: "ارسال",
   },
}
const englishData = {
   Header: {
      Home: "Home",
      About: "About",
      Works: "Works",
      Testimonials: "Testimonials",
      Contact: "Contact",
      Content:
         "We use latest technology to create new products in IOT context Our team consist of four people, each of whom is excellent in their specialty",
   },
   About: {
      Title1: "About Us ",
      Paragraph1:
         "we use latest technology to create new products in iot context. our team consist of four people, each of whom is excellent in their specialty",
      Title2: "Contact Details",
   },
   Portfolio: {
      Title: "CHECK OUT SOME OF OUR WORKS",
   },
   Testimonials: {
      Paragraph1:
         "we use latest technology to create new products in iot context. our team consist of four people, each of whom is excellent in their specialty",
      Paragraph2:
         "The Internet of things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the Internet",
   },
   Contact: {
      Title: "Here is where you should write your message to readers to have them get in contact with you",
      Name: "Name",
      Email: "Email",
      Subject: "Subject",
      Message: "Message",
      Title2: "Address and Phone",
      Phone: "Phone",
      Submit: "Submit",
   },
}
const LanguageContext = React.createContext()
const LanguageContextSetState = React.createContext()

function LanguageProvider({ children }) {
   const [language, setLanguage] = React.useState(false)

   return (
      <LanguageContext.Provider value={language}>
         <LanguageContextSetState.Provider value={setLanguage}>{children}</LanguageContextSetState.Provider>
      </LanguageContext.Provider>
   )
}
//custom hooks
const useLanguageState = () => {
   const language = React.useContext(LanguageContext)
   if (language === undefined) {
      throw new Error("render <Provider /> at top of the tree")
   }
   return language
}
const useLanguageSetState = () => {
   const setlanguage = React.useContext(LanguageContextSetState)

   if (setlanguage === undefined) {
      throw new Error("render <Provider /> at top of the tree")
   }
   return setlanguage
}
const useLanguageAction = () => {
   const setLanguage = useLanguageSetState()

   const toggleLang = () => {
      setLanguage((language) => !language)
   }
   return { toggleLang }
}
const useLanguageData = () => {
   const language = React.useContext(LanguageContext)
   const data = language ? persionData : englishData
   return data
}
export { useLanguageSetState, useLanguageState, useLanguageAction, useLanguageData }
export default LanguageProvider
