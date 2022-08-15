/**
 * Author: Trushita Maurya
 * Feature: Things To Carry
 */

/**
 * This funtion does all the operations on specific thingstocarry collection. It will fetch the content of the 
 * collection based on the city name that is sent form the front-end.
 * @param {*} req
 * @param {*} res
 */

const pdf = require("html-pdf");
const ThingsToCarry = require("../../models/thingsToCarryModel/index");
const path = require("path");

const URL = require("url"); // in Browser, the URL in native accessible on window

exports.fetchAllThingsToCarry = function (req, res) {
  ThingsToCarry.find({}, function (err, result) {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
};

// https://stackoverflow.com/questions/26985908/mongoose-query-with-array-parameter
exports.filterThingsToCarry = function (req, res) {
  let tag = req.body.tags;
  if (tag == undefined || tag.length == 0 || Object.keys(tag).length === 0) {
    tag = ["camping", "hiking", "heritage", "business"];
  }
  if (req.body.tags.length === 0) {
    ThingsToCarry.find({}, function (err, result) {
      if (err) {
        res.send(err);
      }
      res.json(result);
    });
  } else {
    ThingsToCarry.find(
      {
        tags: { $in: req.body.tags },
      },
      function (err, filterCheckList) {
        if (err) return res.json({ success: false, error: err });
        res.json(filterCheckList);
      }
    );
  }
};

exports.searchThingsToCarry = function (req, res) {
  let name = req.body.name;

  ThingsToCarry.find(
    {
      name: { $regex: req.body.name, $options: "i" },
    },
    function (err, result) {
      if (err) return res.json({ success: false, error: err });
      res.json({
        data: result,
      });
    }
  );
};

exports.shareChecklist = function (req, res) {
  pdf.create(pdfTemplate(req.body), {}).toFile("checklist.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }
    res.send(Promise.resolve());
  });
};

exports.downloadPDF = function (req, res) {
  res.sendFile(`${__dirname}/checklist.pdf`);
};

function pdfTemplate({ checkList }) {
  return `
<!DOCTYPE html>
<html>
<head>
<style>
</style>
</head>
<body>
<div>
<section>
        <h2>
        Things To Carry
        </h2>
</section>
<section>

      <div>
      <ul>
      ${checkList.map(
        (item) =>
          `<li>
        ${item}
      </li>`
      )}
      </ul>
      </div>

</section>

</div>
</body>
</html>`;
}
