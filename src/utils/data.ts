import { home } from "../types/types";

//Enums
enum HOME_STATUS {
    RENT = "برای اجاره",
    SALE = "برای فروش",
    MORTGAGE = "برای رهن"
}

enum COUNTRY {
    IRAN = "ایران"
}

enum CITY {
    TEHRAN = "تهران",
    ESFAHAN = "اصفهان",
    MASHHAD = "مشهد",
}

enum TEHRAN_AREA {
    FADAK = "فدک",
    SATARKHAN = "ستارخان",
    NZAMABAD = "نظام آباد",
    TEHRANPARS = "تهرانپارس",
    ZAFERANIE = "زعفرانیه",
    ENGHLAB = "انقلاب",
    ARGANTIN = "آرژانتین",
    TAJRISH = "تجریش",
    SAADATABAD = "سعادت آباد"
}
enum ESFAHAN_AREA {
    BABOLDASHT = "بابلدشت",
    BARAZANDE = "برازنده",
    MILAD = "میلاد",
    VALIASR = "ولیعصر",
    SHAHED = "شاهد",
    MOLAVI = "مولوی",
    RAHIMABAD = "رحیم آباد"
}
enum MASHHAD_AREA {
    KHAYAM = "خیام",
    BOLVARDELAVARN = "بلوار دلاوران",
    GHASEMABAD = "قاسم آباد",
    NAVABSAFAVI = "نواب صفوی"
}

const homeData: home[] = [
    {
        id: 1,
        title: "آپارتمان پارک وی",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.ARGANTIN },
        bathroom: 2,
        meter: 120,
        price: 3_200_000_000,
        rooms: 4,
        status: HOME_STATUS.SALE,
        time: "1 سال قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1379,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ["https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/04/5-960x600.jpg" , "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/04/24-640x540.jpg.webp"],
        saler: { id: 1, name: "امین یزدانی", phone: "09918183139", email: "mh@gmail.com", photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/5-150x150.jpg" },
        description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.`
    },
    {
        id: 2,
        title: "خیابان شمالی دیلارد",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.TAJRISH },
        bathroom: 1,
        meter: 150,
        price: 8_000_000_000,
        rooms: 6,
        status: HOME_STATUS.MORTGAGE,
        time: "1 سال قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1392,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ["https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/04/22-960x600.jpg"],
        saler: { id: 1, name: "احمد حسینی", phone: "09918183139", email: "mh@gmail.com", photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/04/12-300x300.jpg.webp" },
        description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.`
    },
    {
        id: 3,
        title: "آپارتمان نوساز ",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.ENGHLAB },
        bathroom: 1,
        meter: 100,
        price: 2_600_000_000,
        rooms: 2,
        status: HOME_STATUS.SALE,
        time: "برای 5 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1401,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ["https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/04/20-960x600.jpg.webp"],
        saler: { id: 1, name: "امین یزدانی", phone: "09918183139", email: "mh@gmail.com", photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/8-300x300.jpg.webp" },
        description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.`
    },
    {
        id: 4,
        title: "آپارتمان اسپیکر",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.ZAFERANIE },
        bathroom: 1,
        meter: 75,
        price: 5_400_000_000,
        rooms: 2,
        status: HOME_STATUS.RENT,
        time: "برای 2 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1386,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ["https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/04/16.jpg"],
        saler: { id: 1, name: "سامان محلاتی", phone: "09918183139", email: "mh@gmail.com", photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/5-150x150.jpg" },
        description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.`
    },
    {
        id: 5,
        title: "آپارتمان شیک",
        location: { country: COUNTRY.IRAN, city: CITY.ESFAHAN, area: ESFAHAN_AREA.VALIASR },
        bathroom: 1,
        meter: 90,
        price: 1_100_000_000,
        rooms: 2,
        status: HOME_STATUS.RENT,
        time: "برای 7 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1391,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ["https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/04/14.jpg"],
        saler: { id: 1, name: "امیر نیازمند", phone: "09918183139", email: "mh@gmail.com", photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/5-150x150.jpg" },
        description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.`
    },
    {
        id: 6,
        title: "سوییت",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.TEHRANPARS },
        bathroom: 1,
        meter: 40,
        price: 12_500_000_000,
        rooms: 1,
        status: HOME_STATUS.SALE,
        time: "برای 1 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1398,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ["https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/04/23-960x600.jpg.webp"],
        saler: { id: 1, name: "مهدی رحمانی", phone: "09918183139", email: "mh@gmail.com", photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/5-150x150.jpg" },
        description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.`
    },
    {
        id: 7,
        title: "آپارتمان با کیفیت برای فروش ",
        location: { country: COUNTRY.IRAN, city: CITY.MASHHAD, area: MASHHAD_AREA.NAVABSAFAVI },
        bathroom: 1,
        meter: 100,
        price: 7_000_000_000,
        rooms: 2,
        status: HOME_STATUS.SALE,
        time: "برای 1 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1399,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ["https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/04/8-960x600.jpg.webp" ,],
        saler: { id: 1, name: "حسین سالاری", phone: "09918183139", email: "mh@gmail.com", photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/5-150x150.jpg" },
        description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.`
    },
    {
        id: 8,
        title: "آپارتمان میدان انقلاب ",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.ENGHLAB },
        bathroom: 1,
        meter: 60,
        price: 9_900_000_000,
        rooms: 1,
        status: HOME_STATUS.MORTGAGE,
        time: "برای 3 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1394,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ["https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/04/24-640x540.jpg.webp"],
        saler: { id: 1, name: "رضا دولتی", phone: "09918183139", email: "mh@gmail.com", photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/8-300x300.jpg.webp" },
        description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.`
    },
    {
        id: 9,
        title: "پنت هاوس",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.SAADATABAD },
        bathroom: 4,
        meter: 300,
        price: 220_000_000_000,
        rooms: 4,
        status: HOME_STATUS.MORTGAGE,
        time: "برای 9 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1400,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ["https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/04/15.jpg"],
        saler: { id: 1, name: "محمد رضایی", phone: "09918183139", email: "mh@gmail.com", photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/5-150x150.jpg" },
        description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.`
    },
    {
        id: 10,
        title: "آپارتمان نوساز ",
        location: { country: COUNTRY.IRAN, city: CITY.ESFAHAN, area: ESFAHAN_AREA.RAHIMABAD },
        bathroom: 1,
        meter: 55,
        price: 3_300_000_000,
        rooms: 1,
        status: HOME_STATUS.SALE,
        time: "برای 6 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1402,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ["https://theme.aliniyazi.info/homeo/wp-content/uploads/elementor/thumbs/blog1-q3ztbjlv72jey3ngo30acyb076xss0cvbmjsasx17o.jpg"],
        saler: { id: 1, name: "عرفان پوری", phone: "09918183139", email: "mh@gmail.com", photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/8-300x300.jpg.webp" },
        description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.`
    },
    {
        id: 11,
        title: "پنت هاوس",
        location: { country: COUNTRY.IRAN, city: CITY.MASHHAD, area: MASHHAD_AREA.BOLVARDELAVARN },
        bathroom: 3,
        meter: 170,
        price: 66_400_000_000,
        rooms: 3,
        status: HOME_STATUS.RENT,
        time: "برای 1 سال قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1390,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ["https://theme.aliniyazi.info/homeo/wp-content/uploads/elementor/thumbs/blog3-q3zscorbr8tmeoa77ilce8yn5sqsc2z7j3mkmellyc.jpg"],
        saler: { id: 1, name: "امین جعفری", phone: "09918183139", email: "mh@gmail.com", photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/5-150x150.jpg" },
        description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.`
    },
    {
        id: 12,
        title: "سوییت سعادت آباد",
        location: { country: COUNTRY.IRAN, city: CITY.TEHRAN, area: TEHRAN_AREA.SAADATABAD },
        bathroom: 1,
        meter: 50,
        price: 20_000_000_000,
        rooms: 1,
        status: HOME_STATUS.SALE,
        time: "برای 7 ماه قبل",
        type: "مجموعه ی آپارتمانی",
        year: 1390,
        options: {
            airConditioning: { name: "تهویه هوا", status: false },
            barbecue: { name: "باربیکیو", status: true },
            dryer: { name: "خشک کن", status: true },
            grass: { name: "چمن", status: false },
            gym: { name: "باشگاه", status: false },
            wifi: { name: "اینترنت", status: true },
            jacuzzi: { name: "جکوزی", status: false },
            laundry: { name: "خشکشویی", status: false },
            microwave: { name: "مایکروویو", status: false },
            pool: { name: "استخر", status: false },
            refrigrator: { name: "یخچال", status: true },
            televisionCable: { name: "کابل تلوزیون", status: false }
        },
        image: ["https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/04/5-960x600.jpg"],
        saler: { id: 1, name: "آرین سالارکیا", phone: "09918183139", email: "mh@gmail.com", photo: "https://theme.aliniyazi.info/homeo/wp-content/uploads/2020/02/8-300x300.jpg.webp" },
        description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.`
    },
]

export default homeData