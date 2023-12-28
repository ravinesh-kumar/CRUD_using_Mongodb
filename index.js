const express = require("express")

const app = express()

const path = require("path")

const hbs = require("hbs")

const bodyParser = require("body-parser")

require("./dbconnect")

const encoder = bodyParser.urlencoded()

//table required
const Employee = require("./Models/Employe")

app.set("view engine", "hbs")

app.use(express.static(path.join(__dirname, "./views/public")))

hbs.registerPartials(path.join(__dirname, "./views/partials"))
//for table show
app.get("/", async (req, res) => {
    try {
        let data = await Employee.find().sort({ _id: 1 })
        res.render('index', { data: data })
    } catch (error) {
        console.log(error)
    }
})
//add employee to the database
app.get("/add", (req, res) => {
    res.render('add')
})

//insert data in mongoose
app.post("/add", encoder, async (req, res) => {
    try {
        let data = new Employee(req.body)
        // console.log(req.body)

        await data.save()
        res.redirect("/add")

    }
    catch (error) {
        console.log(error)
    }
})

// app.get("/edit", (req, res) => {
//     res.render('edit')
// })

app.get("/delete/:id", async (req, res) => {
    try {
        // let data = await Employee.findOne({_id:req.params._id})
        // await data.deleteOne()
        await Employee.deleteOne({ _d: req.params._id })
        res.redirect("/")
    } catch (error) {
        console.log(error)
    }
})
// edit/:_id  request parameter
app.get("/edit/:_id", async (req, res) => {
    try {
        let data = await Employee.findOne({ _id: req.params._id })
        // console.log(req.params._id)    option to print id
        res.render("edit", { data: data })
        // await data.deleteOne()
        // await Employee.deleteOne({_d:req.params._id})
    } catch (error) {
        console.log(error)
    }
})
app.post("/edit/:_id", encoder, async (req, res) => {
    try {
        await Employee.updateOne({ _id: req.params._id }, req.body)
        res.redirect("/")
        // await data.deleteOne()
        // await Employee.deleteOne({_d:req.params._id})
    } catch (error) {
        console.log(error)
    }
})


app.listen(8080, () => console.log("server running at http://localhost:8080"))