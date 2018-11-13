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
    { name: "Adamawa", capital: "Yola" },
    { name: "Akwa Ibom", capital: "Uyo" },
    { name: "Anambra", capital: "Awka" },
    { name: "Bauchi", capital: "Bauchi" },
    { name: "Bayelsa", capital: "Yenagoa" },
    { name: "Benue", capital: "Makurdi" },
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
    { name: "FCT", capital: "Abuja" }
]

