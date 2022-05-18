import { Router } from "express";
import { methods as petSitterController } from "./../controllers/petSitter.controler";

const router = Router();

/* Rutas para tabla PetSitter unicamente  */
router.get("/", petSitterController.getPetSitters);
router.get("/:id", petSitterController.getPetSitter);
router.get("/state/:id", petSitterController.getPetSittersFilteredState);
router.put("/:id", petSitterController.updatePetSitter);
router.post("/", petSitterController.addPetSitter);
router.delete("/:id", petSitterController.deletePetSitter);

/* Rutas para PetSitter - PetsTypes  */
router.get("/:idPetSitter/pets-type", petSitterController.getAllPetsTypeFromPetSitter);
router.post("/:idPetSitter/pets-type/", petSitterController.addPetsTypeToPetSitter);
router.delete("/:idPetSitter/pets-type/:idPetsType", petSitterController.deletePetsTypeFromPetSitter);

export default router;
