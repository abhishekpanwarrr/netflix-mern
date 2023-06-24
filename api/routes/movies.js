const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken");

//Create
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const newMovie = await Movie(req.body);
      const savedMovie = newMovie.save();

      res.status(201).json(newMovie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(403).json({ message: "You can not create a movie" });
  }
});

//Update
router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updateMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateMovie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(403).json({ message: "You can not create a movie" });
  }
});

//Delete
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(403).json({ message: "You can not create a movie" });
  }
});

//Get random movie
router.get("/random", verify, async (req, res) => {
    const type = req.query.type
    let movie

    try {
    if(type ==="series") {
        movie = await  Movie.aggregate([
            {$match:{isSeries: true}},
            {$sample:{size:1}}
        ])
    }else{
        movie = await  Movie.aggregate([
            {$match:{isSeries: false}},
            {$sample:{size:1}}
        ])
    }

    res.status(200).json(movie) 

    } catch (error) {
      res.status(500).json({ message: error.message });
    }

});
//Get single movie
router.get("/find/:id", verify, async (req, res) => {
    try {
     const movie =  await Movie.findById(req.params.id);
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  
});

//Get all
router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
       const movies =  await Movie.find();
        res.status(200).json(movies);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.status(403).json({ message: "You can not create a movie" });
    }
  });
  

module.exports = router;
