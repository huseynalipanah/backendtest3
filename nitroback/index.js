import express from "express";
import cors from "cors";
import mongoose, { Schema } from "mongoose";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
const serviceSchema = new Schema({
  icon: {
    type: String,
    unique: true,
  },
  name: String,
  about: String,
});
const Service = mongoose.model("Service", serviceSchema);
app.get("/service", async (req, res) => {
  try {
    const serviceItem = await Service.find();
    res.json(serviceItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get("/service/:id", async (req, res) => {
  try {
    const serviceItem = await Service.findById(req.params.id);
    if (!serviceItem) {
      res.status(404).json({ message: "service not found!" });
    } else {
      res.json(serviceItem);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/service", async (req, res) => {
  const serviceItem = new Service(req.body);
  try {
    await serviceItem.save();
    res.status(201).json(serviceItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.put("/service/:id", async (req, res) => {
  try {
    const serviceItem = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!serviceItem) {
      res.status(404).json({ message: "service not found!" });
    } else {
      res.json(serviceItem);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete("/service/:id", async (req, res) => {
  try {
    const serviceItem = await Service.findByIdAndDelete(req.params.id);
    if (!serviceItem) {
      res.status(404).json({ message: "Service not found!" });
    } else {
      res.status(200).json({ message: "Service Deleted" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

mongoose
  .connect("mongodb+srv://huz3yn:huseyn04ru@hakunamatata.wsdwnh9.mongodb.net/")
  .then(() => console.log("DataBase Connected!"))
  .catch((err) => console.log(err));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
