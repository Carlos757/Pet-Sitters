import { Router } from "express";
import { methods as petSitterController } from "./../controllers/petSitter.controler";

const router = Router();

router.get("/", petSitterController.getPetSitters);
router.get("/:id", petSitterController.getPetSitter);
router.get("/state/:id", petSitterController.getPetSittersFilteredState);
router.put("/:id", petSitterController.updatePetSitter);
router.post("/", petSitterController.addPetSitter);

export default router;
