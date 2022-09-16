let _txt = document.getElementsByTagName('textarea')[0]

_txt.addEventListener('keyup', function () {
    _char = _txt.value.length
    document.querySelector('.char>p>span').innerHTML = _char

    _word = _txt.value.split(' ').filter((item) => {
        return item != '';
    })
    document.querySelector('.word>p>span').innerHTML = _word.length
})