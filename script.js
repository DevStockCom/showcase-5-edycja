// Sprawdź, czy masz kawę.
// Jeśli nie masz kawy, kup ją.
// Znajdź czystą filiżankę.
// Jeśli nie ma czystej filiżanki, umyj jedną.
// Zastanów się ile chcesz łyżeczek kawy (jak bardzo jesteś zmęczony)
// Wsyp odpowiednią ilość łyżeczek kawy do kubeczka
// Zalej kubek gorącą wodą
// Wypij kawę.
// Zacznij naukę

function clickMe() {
    alert('Gratuluje świetnego wyboru!!! Zostaw komentarz i lajka jak Ci się podobało')
}

const dom = {
    kawa: false,
    czystyKubek: false,
    kubekZkawa: 0
}

function kupKawe() {
    dom.kawa = true
}

function wsypLyzeczke() {
    dom.kubekZkawa = dom.kubekZkawa + 1
}

function umyjJedenKubek() {
    dom.czystyKubek = true
}

function wypijKawe() {
    const ileLyzeczek = document.getElementById('liczba-lyzeczek').value
    if (dom.kawa === false) {
        kupKawe()
    }

    if (ileLyzeczek > 2 && ileLyzeczek < 4) {
        alert('Idealnie')
    }

    if (ileLyzeczek > 5) {
        alert('Ocipiales, umrzesz, serce Ci stanie')
    }

    if (dom.czystyKubek) {
        umyjJedenKubek()
    }

    
    while (dom.kubekZkawa <= ileLyzeczek) {
        console.log(dom.kubekZkawa)
        wsypLyzeczke()
    }

    console.log('zalej wodą')
    console.log('wypij kawę')

}