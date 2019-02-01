interface State {
    name: string;
    capital: string;
    LGAs?: Array<{ name: string; }>

}

let NigianStates: Array<State> = [
    {
        name: "Abia", capital: "Umuahia", LGAs: [
            { name: "Aba North" },
            { name: "Aba South" },
            { name: "Arochukwu" },
            { name: "Bende" },
            { name: "Ikwuano" },
            { name: "Isiala Ngwa North" },
            { name: "Isiala Ngwa South" },
            { name: "Isuikwuato" },
            { name: "Obi Ngwa" },
            { name: "Ohafia" },
            { name: "Osisioma Ngwa" },
            { name: "Ugwunagbo" },
            { name: "Ukwa East" },
            { name: "Ukwa West" },
            { name: "Umuahia North" },
            { name: "Umuahia South" }
        ]
    },
    {
        name: "Adamawa", capital: "Yola", LGAs: [
            { name: "Demsa" },
            { name: "Fufore" },
            { name: "Ganye" },
            { name: "Girei" },
            { name: "Gombi" },
            { name: "Guyuk" },
            { name: "Hong" },
            { name: "Jada" },
            { name: "Lamurde" },
            { name: "Madagali" },
            { name: "Maiha" },
            { name: "Mayo-Belwa" },
            { name: "Michika" },
            { name: "Mubi North" },
            { name: "Mubi South" },
            { name: "Numan" },
            { name: "Shelleng" },
            { name: "Song" },
            { name: "Toungo" },
            { name: "Yola North" },
            { name: "Yola South" }
        ]
    },
    {
        name: "Akwa Ibom", capital: "Uyo", LGAs: [
            { name: "Abak" },
            { name: "Eastern Obolo" },
            { name: "Eket" },
            { name: "Esit-Eket" },
            { name: "Essien Udim" },
            { name: "Etim-Ekpo" },
            { name: "Etinan" },
            { name: "Ibeno" },
            { name: "Ibesikpo-Asutan" },
            { name: "Ibiono-Ibom" },
            { name: "Ika" },
            { name: "Ikono" },
            { name: "Ikot Abasi" },
            { name: "Ikot Ekpene" },
            { name: "Ini" },
            { name: "Itu" },
            { name: "Mbo" },
            { name: "Mkpat-Enin" },
            { name: "Nsit-Atai" },
            { name: "Nsit-Ibom" },
            { name: "Nsit-Ubium" },
            { name: "Obot-Akara" },
            { name: "Okobo" },
            { name: "Onna" },
            { name: "Oron" },
            { name: "Oruk Anam" },
            { name: "Ukanafun" },
            { name: "Udung-Uko" },
            { name: "Uruan" },
            { name: "Urue-Offong/Oruko" },
            { name: "Uyo" }
        ]
    },
    {
        name: "Anambra", capital: "Awka", LGAs: [
            { name: "Aguata" },
            { name: "Awka North" },
            { name: "Awka South" },
            { name: "Anambra East" },
            { name: "Anambra West" },
            { name: "Anaocha" },
            { name: "Ayamelum" },
            { name: "Dunukofia" },
            { name: "Ekwusigo" },
            { name: "Idemili North" },
            { name: "Idemili South" },
            { name: "Ihiala" },
            { name: "Njikoka" },
            { name: "Nnewi North" },
            { name: "Nnewi South" },
            { name: "Ogbaru" },
            { name: "Onitsha North" },
            { name: "Onitsha South" },
            { name: "Orumba North" },
            { name: "Orumba South" },
            { name: "Oyi" }
        ]
    },
    {
        name: "Bauchi", capital: "Bauchi", LGAs: [
            { name: "Alkaleri" },
            { name: "Bauchi" },
            { name: "Bogoro" },
            { name: "Damban" },
            { name: "Darazo" },
            { name: "Dass" },
            { name: "Gamawa" },
            { name: "Ganjuwa" },
            { name: "Giade" },
            { name: "Itas Gadau" },
            { name: "Jama'are" },
            { name: "Katagum" },
            { name: "Kirfi" },
            { name: "Misau" },
            { name: "Ningi" },
            { name: "Shira" },
            { name: "Tafawa Balewa" },
            { name: "Toro" },
            { name: "Warji" },
            { name: "Zaki" }
        ]
    },
    {
        name: "Bayelsa", capital: "Yenagoa", LGAs: [
            { name: "Brass" },
            { name: "Ekeremor" },
            { name: "Kolokuma Opokuma" },
            { name: "Nembe" },
            { name: "Ogbia" },
            { name: "Sagbama" },
            { name: "Southern Ijaw" },
            { name: "Yenagoa" }
        ]
    },
    {
        name: "Benue", capital: "Makurdi", LGAs: [
            { name: "Agatu" },
            { name: "Apa" },
            { name: "Ado" },
            { name: "Buruku" },
            { name: "Gboko" },
            { name: "Guma" },
            { name: "Gwer East" },
            { name: "Gwer West" },
            { name: "Katsina-Ala" },
            { name: "Konshisha" },
            { name: "Kwande" },
            { name: "Logo" },
            { name: "Makurdi" },
            { name: "Obi" },
            { name: "Ogbadibo" },
            { name: "Ohimini" },
            { name: "Oju" },
            { name: "Okpokwu" },
            { name: "Oturkpo" },
            { name: "Tarka" },
            { name: "Ukum" },
            { name: "Ushongo" },
            { name: "Vandeikya" }
        ]
    },
    { name: "Borno", capital: "Maiduguri" },
    { name: "Cross River", capital: "Calabar" },
    { name: "Delta", capital: "Asaba" },
    { name: "Ebonyi", capital: "Abakaliki" },
    { name: "Edo", capital: "Benin" },
    { name: "Ekiti", capital: "Ado Ekiti" },
    { name: "Enugu", capital: "Enugu" },
    { name: "Gombe", capital: "Gombe" },
    { name: "Imo", capital: "Owerri" },
    { name: "Jigawa", capital: "Dutse" },
    { name: "Kaduna", capital: "Kaduna" },
    { name: "Kano", capital: "Kano" },
    { name: "Katsina", capital: "Katsina" },
    { name: "Kebbi", capital: "Birnin Kebbi" },
    { name: "Kogi", capital: "Lokoja" },
    { name: "Kwara", capital: "Ilorin" },
    { name: "Lagos", capital: "Ikeja" },
    { name: "Nasarawa", capital: "Lafia" },
    { name: "Niger", capital: "Minna" },
    { name: "Ogun", capital: "Abeokuta" },
    { name: "Ondo", capital: "Akure" },
    { name: "Osun", capital: "Oshogbo" },
    { name: "Oyo", capital: "Ibadan" },
    { name: "Plateau", capital: "Jos" },
    { name: "Rivers", capital: "Port Harcourt" },
    { name: "Sokoto", capital: "Sokoto" },
    { name: "Taraba", capital: "Jalingo" },
    { name: "Yobe", capital: "Damaturu" },
    { name: "Zamfara", capital: "Gusau" },
    { name: "Federal Capital Territory", capital: "Abuja" }
]

