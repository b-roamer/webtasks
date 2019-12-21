const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const assert = require("assert");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(bodyParser.json()); // third party request's body parser
app.use(cors()); // third party, enabling cors for development
app.use(express.static(path.join(__dirname, "public"))); // referencing static resources

app.use((req, res, next) => {
  // SQL-injection basic defense
  for (const key in req.params)
    if (req.params[key] instanceof String && req.params[key].includes("DROP"))
      res.status(400).end();

  for (const key in req.body)
    if (req.body[key] instanceof String && req.body[key].includes("DROP")) res.status(400).end();

  next();
});

app.use((req, res, next) => {
  // Logging requests
  console.log(`${req.method} request to ${req.url}, at ${new Date().toTimeString()}`);
  next();
});

// creating MySQL connection
const sqlConnection = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "admin",
  database: "b_roamer",
});

sqlConnection.connect(err => {
  assert.equal(err, null, "Error in MySQL connection: " + err);

  console.log("| Database Connected");

  // sqlConnection.query("CREATE DATABASE IF NOT EXISTS b_roamer", (err, result) => {
  //   assert.equal(err, null, "Error, database could not be created");
  // });

  // sqlConnection.query("DROP TABLE events", err => {});
  // sqlConnection.query("DROP TABLE collections", err => {});
  // sqlConnection.query("DROP TABLE collectionItems", err => {});

  sqlConnection.query(
    "CREATE TABLE events (id int AUTO_INCREMENT PRIMARY KEY, name varchar(255) NOT NULL, description varchar(1000) NOT NULL);",
    err => {
      if (err === null) {
        const INSERT = (name, description) =>
          `INSERT INTO events (name, description) VALUES ("${name}", "${description}")`;
        sqlConnection.query(
          INSERT(
            "FIRST EVER FAN MEETUP IN ALMATY",
            "Rustem Baltiyev has annouced the very first fan meetup in his hometown. The venue is yet to specified, but it is speculated that it is going to be held in the business-incubator 'SmartPoint'. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, dolore? Aspernatur, molestiae assumenda. Rerum, iste eligendi? Obcaecati consequatur porro, dolorum adipisci ab ad hic fuga! Dolores voluptatum voluptates porro natus."
          )
        );
        sqlConnection.query(
          INSERT(
            "THE LONG AWAITED EXHIBITION IS HERE",
            "The gallery finally opened the doors to the Rustem Baltiyev's exhibition that contains the highlights of his carreer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati reiciendis tenetur fuga? Nisi dignissimos dolorem earum neque obcaecati laborum nesciunt maiores velit minima. Vel veritatis fugit ut consectetur voluptatibus quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusantium ad ullam nemo iure fuga alias delectus, deleniti quasi nihil veritatis! Natus harum perferendis esse maiores? Eius eos aspernatur natus."
          )
        );
        sqlConnection.query(
          INSERT(
            "UNSPLASH AWARDS HAS CHOSEN 3 OUT OF 5 PHOTOS OF RB",
            "The most recent event that took place in the headquarters of Unsplash set yet another milestone for the works of Rustem Baltiyev. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum provident sint ut adipisci quo? Laboriosam assumenda minus possimus delectus, debitis ea culpa aut praesentium, quo vel reiciendis. Tenetur, delectus dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, delectus ipsum? Odio quo debitis explicabo dignissimos temporibus voluptas ut dolore consequuntur, quibusdam expedita sunt vitae sequi nam officiis reiciendis facilis."
          )
        );
        sqlConnection.query(
          INSERT(
            "YOU CAN FINALLY BUY THE QUALITY PRINTS OF RB'S COLLECTIONS",
            "This website is made for the fans of RB's work who wanted to acquire copies of his art. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veniam quaerat laudantium ab dignissimos consequuntur esse nemo distinctio, voluptatem labore, quidem voluptas ipsam vitae ad suscipit eius aperiam neque placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet facilis minima explicabo ducimus obcaecati, sint ad ipsam cumque, unde omnis cupiditate possimus eius nesciunt nemo temporibus inventore accusamus. Aperiam, at."
          )
        );
        console.log("| events table is created, default values are inserted");
      } else console.log("| events table is already created");
    }
  );
  sqlConnection.query(
    "CREATE TABLE collections (id int AUTO_INCREMENT PRIMARY KEY, name varchar(255) NOT NULL, description varchar(255) NOT NULL);",
    err => {
      if (err === null) {
        const INSERT = (name, description) =>
          `INSERT INTO collections (name, description) VALUES ("${name}", "${description}")`;
        sqlConnection.query(
          INSERT(
            "COLORS",
            "The beauty of our loved ones that sings in an inefable harmony with the World's colors."
          )
        );
        sqlConnection.query(
          INSERT(
            "TO THE SKY",
            "The desire to fly like a bird and see just how little we are in comparison with the grandeur of our World inspired me to create this collection."
          )
        );
        sqlConnection.query(
          INSERT(
            "HUMANE",
            "The variety of human emotions and the spectrum of out empathy is what really defines us as human beings."
          )
        );
        console.log("| collections table is created, default values are inserted");
      } else console.log("| collections table is already created");
    }
  );
  sqlConnection.query(
    "CREATE TABLE collectionItems (id int AUTO_INCREMENT PRIMARY KEY, collectionId int NOT NULL, img varchar(100) NOT NULL, description varchar(1000));",
    err => {
      if (err === null) {
        const INSERT = (collection_id, img, description) =>
          `INSERT INTO collectionItems (collectionId, img, description) VALUES (${collection_id}, "${img}", "${description}")`;
        sqlConnection.query(
          INSERT(
            1,
            "colors 1.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            1,
            "colors 2.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            1,
            "colors 3.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            1,
            "rustem-baltiyev-DAZaHleLYCA-unsplash.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            1,
            "rustem-baltiyev-jGMN_-vnMNU-unsplash.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            1,
            "rustem-baltiyev-UHpUi0eBEp8-unsplash.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            1,
            "rustem-baltiyev-yQFVSHIZJas-unsplash.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            2,
            "to the sky 2.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            2,
            "to the sky 1.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            2,
            "to the sky 3.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            2,
            "smores_sky.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            2,
            "nyc_tower sky.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            2,
            "nyc_cloud.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            3,
            "humane 1.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            3,
            "humane 2.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            3,
            "humane 3.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            3,
            "philly_homeless.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            3,
            "philly_girl in bazar.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            3,
            "nyc_nicole.jpg",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        // contributions
        sqlConnection.query(
          INSERT(
            0,
            "IMG_3354.png",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            0,
            "IMG_3609.png",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            0,
            "IMG_3742.png",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            0,
            "IMG_3907.png",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            0,
            "IMG_3908.png",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            0,
            "IMG_4236.png",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        sqlConnection.query(
          INSERT(
            0,
            "IMG_4302.png",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid pariatur accusantium, ratione natus officiis corrupti!"
          )
        );
        console.log("| collectionItems is created, default values are inserted");
      } else console.log("| collectionItems is already created");
    }
  );

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "homepage.html"));
  });

  app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "admin-page", "admin.html"));
  });

  app.get("/events", (req, res) => {
    sqlConnection.query("SELECT * FROM events", (err, result) => {
      res.send(result);
    });
  });

  app.get("/collections", (req, res) => {
    sqlConnection.query("SELECT * FROM collections", (err, result) => {
      res.send(result);
    });
  });

  app.get("/collection-items", (req, res) => {
    sqlConnection.query(
      `SELECT DISTINCT collectionItems.id, collections.name, collectionItems.img, collectionItems.description FROM collections, collectionItems WHERE collections.id = collectionitems.collectionId`,
      (err, result) => {
        res.send(result);
      }
    );
  });

  app.get("/collection-items/:name", (req, res) => {
    const name = req.params["name"];

    sqlConnection.query(
      `SELECT * FROM collections, collectionItems WHERE collections.name = "${name}" AND collections.id = collectionitems.collectionId`,
      (err, result) => {
        res.send(result);
      }
    );
  });

  let cart = [];

  app.get("/contributions", (req, res) => {
    sqlConnection.query("SELECT * FROM collectionItems WHERE collectionId = 0", (err, result) => {
      res.send(result);
    });
  });

  app.get("/cart", (req, res) => {
    res.send(cart);
  });

  app.get("/cart/sorted", (req, res) => {
    const copy = [...cart].sort((a, b) => {
      if (a > b) return -1;
      else if (a < b) return 1;
      return 0;
    });
    console.log(cart);
    res.send(copy);
  });

  app.post("/add-to-cart", (req, res) => {
    if (cart.includes(req.body.item)) res.status(400).end();
    else {
      cart.push(req.body.item);
      res.status(200).end();
    }
  });

  app.delete("/delete-from-cart", (req, res) => {
    if (!cart.includes(req.body.item)) res.status(400).end();
    else {
      cart = cart.filter(item => item !== req.body.item);
      res.status(200).end();
    }
  });

  app.listen(PORT, () => {
    console.log("| Server is running at port: " + PORT);
  });

  app.put("/events", (req, res) => {
    const event = req.body.item;

    sqlConnection.query(
      `UPDATE events SET name="${event.name}", description="${event.description}" WHERE id=${event.id}`,
      (err, result) => {
        if (err) console.log(err);
        res.end();
      }
    );
  });

  app.put("/collections", (req, res) => {
    const collection = req.body.item;

    sqlConnection.query(
      `UPDATE collections SET name="${collection.name}", description="${collection.description}" WHERE id=${collection.id}`,
      (err, result) => {
        if (err) console.log(err);
        res.end();
      }
    );
  });

  app.put("/collection-items", (req, res) => {
    const collectionItem = req.body.item;

    sqlConnection.query(
      `SELECT * FROM collections WHERE name="${collectionItem.name}"`,
      (err, collection) => {
        if (err || collection.length === 0) {
          console.log(err);
          res.end();
        }
        sqlConnection.query(
          `UPDATE collectionItems SET collectionId=${collection[0].id}, img="${collectionItem.img}", description="${collectionItem.description}" WHERE id=${collectionItem.id}`,
          (err, result) => {
            if (err) console.log(err);
            res.end();
          }
        );
      }
    );
  });

  app.delete("/events", (req, res) => {
    const event = req.body.item;

    sqlConnection.query(`DELETE FROM events WHERE id=${event.id}`, (err, result) => {
      if (err) console.log(err);
      res.end();
    });
  });

  app.delete("/collections", (req, res) => {
    const collection = req.body.item;

    sqlConnection.query(`DELETE FROM collections WHERE id=${collection.id}`, (err, result) => {
      if (err) console.log(err);
      else {
        sqlConnection.query(
          `DELETE FROM collectionItems WHERE collectionId=${collection.id}`,
          (err, result) => {
            if (err) console.log(err);
          }
        );
      }
      res.end();
    });
  });

  app.delete("/collection-items", (req, res) => {
    const collectionItem = req.body.item;

    sqlConnection.query(
      `DELETE FROM collectionItems WHERE id=${collectionItem.id}`,
      (err, result) => {
        if (err) console.log(err);
        res.end();
      }
    );
  });

  app.post("/events", (req, res) => {
    const event = req.body.item;

    sqlConnection.query(
      `INSERT INTO events (name, description) VALUES ("${event.name}", "${event.description}")`,
      (err, result) => {
        res.end();
      }
    );
  });

  app.post("/collections", (req, res) => {
    const collection = req.body.item;

    sqlConnection.query(
      `INSERT INTO collections (name, description) VALUES ("${collection.name}", "${collection.description}")`,
      (err, result) => {
        res.end();
      }
    );
  });

  app.post("/collection-items", (req, res) => {
    const collectionItem = req.body.item;

    sqlConnection.query(
      `SELECT * FROM collections WHERE name="${collectionItem.name}"`,
      (err, collection) => {
        if (err || collection.length === 0) {
          console.log(err);
          res.end();
        }
        sqlConnection.query(
          `INSERT INTO collectionItems (collectionId, img, description) VALUES (${collection[0].id}, "${collectionItem.img}", "${collectionItem.description}")`,
          (err, result) => {
            if (err) console.log(err);
            res.end();
          }
        );
      }
    );
  });
});
