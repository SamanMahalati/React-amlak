import { blog, search, user } from "../types/types"
import { HomeRoundedIcon, HomeWorkRoundedIcon, PeopleOutlineRoundedIcon, CallRoundedIcon, CottageIcon, CurrencyExchangeIcon, GroupsIcon } from "./Mui/mui"

// Search Items
export const searchType: search[] = [
    { id: 1, name: 'خانه شهری', unavailable: false },
    { id: 2, name: 'آپارتمان', unavailable: false },
    { id: 3, name: 'ویلای مدرن', unavailable: false },
    { id: 4, name: 'مجموعه آپارتمانی', unavailable: true },
    { id: 5, name: 'خانه خانوادگی', unavailable: false },
]
export const searchCity: search[] = [

    { id: 1, name: 'اصفهان', unavailable: false },
    { id: 2, name: 'تهران', unavailable: false },
    { id: 3, name: 'مازندران', unavailable: false },
    { id: 4, name: 'مشهد', unavailable: true },
]
export const searchRoom: search[] = [

    { id: 1, name: '+1', unavailable: false },
    { id: 2, name: '+2', unavailable: false },
    { id: 3, name: '+3', unavailable: false },
    { id: 4, name: '+4', unavailable: true },
    { id: 5, name: '+5', unavailable: false },
]

// Main menu items
export const menuItems = [
    { route: "/" , name: "صفحه اصلی", icon: HomeRoundedIcon },
    { route: "/posts" , name: "املاک", icon: HomeWorkRoundedIcon },
    { route: "/users" , name: "کاربران", icon: PeopleOutlineRoundedIcon },
    { route: "/contact" , name: "تماس با ما", icon: CallRoundedIcon },
]

// Advertusement items

export const advertise = [
    {
        id: 1,
        icon: CottageIcon,
        title: "طیف گسترده ای از املاک",
        content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    },
    {
        id: 2,
        icon: CurrencyExchangeIcon,
        title: "تأمین مالی آسان",
        content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    },
    {
        id: 3,
        icon: GroupsIcon,
        title: "مورد اعتماد هزاران نفر",
        content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    },
]

// Customers 
export const customers : user[] = [
    { id: 1, photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/6.jpg.webp", name: "شیما حسینی", phone: "09918183139" , job: "طراح", comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." },
    { id: 2, photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/9.jpg.webp", name: "یونس نیازی" , phone: "09123456754" , job: "مدیر فروش", comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." },
    { id: 3, photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/8.jpg.webp", name: "علی احمدی", phone: "09102133212" , job: "برنامه نویس", comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." },
    { id: 4, photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/7.jpg.webp", name: "شقایق حسینی", phone: "09192124213" , job: "طراح رابط کاربری", comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." },
]

// Blogs
export const blogs : blog[] = [
    {id: 1 , type: "اپارتمان" , photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/elementor/thumbs/blog1-q3l8znqvamvixhxekvmes7sxtrrujkehgo418odp44.jpg" , title: "بازارهای مسکن که بیشترین تغییررا این دهه دارند" , author: {id: 1 , name: "علی امینی" , photo: "https://theme.aliniyazi.info/homeo/wp-content/litespeed/avatar/94ee380753754b47359102847cf914ba.jpg?ver=1679567013" , phone: "09918183139"} , time: "۹ اسفند ۱۳۹۸"} ,
    {id: 2 , type: "اپارتمان" , photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/elementor/thumbs/blog8-q3z965loztjb7hbifj335030oeaekym2xa85hggj1g.jpg" , title: "ردیفن بهترین شهرهای کانادا برای دوچرخه سواری را رونمایی می کند" , author: {id: 1 , name: "علی امینی" , photo: "https://theme.aliniyazi.info/homeo/wp-content/litespeed/avatar/94ee380753754b47359102847cf914ba.jpg?ver=1679567013" , phone: "09918183139"} , time: "۹ اسفند ۱۳۹۸"} ,
    {id: 3 , type: "اپارتمان" , photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/elementor/thumbs/blog3-q3l8znqvamvixhxekvmes7sxtrrujkehgo418odp44.jpg" , title: "بازارهای مسکن که بیشترین تغییررا این دهه دارند" , author: {id: 1 , name: "علی امینی" , photo: "https://theme.aliniyazi.info/homeo/wp-content/litespeed/avatar/94ee380753754b47359102847cf914ba.jpg?ver=1679567013" , phone: "09918183139"} , time: "۹ اسفند ۱۳۹۸"} ,
    {id: 4 , type: "اپارتمان" , photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/04/20-850x550.jpg.webp" , title: "ردفین رقیب ترین محله های سال ۲۰۲۰ را به خود اختصاص داده است" , author: {id: 1 , name: "علی امینی" , photo: "https://theme.aliniyazi.info/homeo/wp-content/litespeed/avatar/94ee380753754b47359102847cf914ba.jpg?ver=1679567013" , phone: "09918183139"} , time: "۹ اسفند ۱۳۹۸"} ,
    {id: 5 , type: "اپارتمان" , photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/04/8-850x550.jpg.webp" , title: "بازارهای مسکن که بیشترین تغییررا این دهه دارند" , author: {id: 1 , name: "علی امینی" , photo: "https://theme.aliniyazi.info/homeo/wp-content/litespeed/avatar/94ee380753754b47359102847cf914ba.jpg?ver=1679567013" , phone: "09918183139"} , time: "۹ اسفند ۱۳۹۸"} ,
    {id: 6 , type: "اپارتمان" , photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/04/22-850x550.jpg.webp" , title: "ردفین رقیب ترین محله های سال ۲۰۲۰ را به خود اختصاص داده است" , author: {id: 1 , name: "علی امینی" , photo: "https://theme.aliniyazi.info/homeo/wp-content/litespeed/avatar/94ee380753754b47359102847cf914ba.jpg?ver=1679567013" , phone: "09918183139"} , time: "۹ اسفند ۱۳۹۸"} ,
]

// Workmates
export const workmates: string[] = [
    "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/brand05.png.webp" ,
    "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/brand03.png.webp" ,
    "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/brand05.png.webp" ,
    "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/brand04.png.webp" ,
    "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/brand06.png.webp" ,
]