/**
 * Author: Trushita Maurya
 * Feature: Things to carry router
 * Description: Things to carry router for backend calls
 */
const thingsToCarryRouter = require("express").Router();
const thingsToCarryService = require("../../middleware/thingsToCarryService");

thingsToCarryRouter.post(
  "/fetchAllThingsToCarry",
  thingsToCarryService.fetchAllThingsToCarry
);

thingsToCarryRouter.post(
  "/filterThingsToCarry",
  thingsToCarryService.filterThingsToCarry
);

thingsToCarryRouter.post(
  "/searchThingsToCarry",
  thingsToCarryService.searchThingsToCarry
);

thingsToCarryRouter.post(
  "/shareChecklist",
  thingsToCarryService.shareChecklist
);

thingsToCarryRouter.get("/downloadPDF", thingsToCarryService.downloadPDF);

module.exports = thingsToCarryRouter;
