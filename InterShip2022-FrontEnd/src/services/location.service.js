import rootInstance from "./utilsService/rootInstance";


const getAllLocations = async () => {
  return await rootInstance.get("/location/all");
};



const getLocationByID = async (id) => {
  return await rootInstance.get("/location/" + id);
};

const createLocation = async (location) => {
  return await rootInstance.post("/location/", location);
}

const deleteLocation = async (id) => {
  return await rootInstance.delete("/location/" + id);
}

const updateLocation = async (id, location) => {
  return await rootInstance.put("/location/" + id, location);
}




const LocationService = {
  getAllLocations,
  getLocationByID,
  createLocation,
  deleteLocation,
  updateLocation,

};

export default LocationService;
