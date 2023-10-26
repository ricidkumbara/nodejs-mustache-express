const index = (req, res) => {
    res.render('home')
}

const show = (req, res) => {
    res.render('content')
}

export default {
    index,
    show
}