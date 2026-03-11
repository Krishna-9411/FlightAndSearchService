const { cityRepository } = require('../repository/index');

class cityService {
    constructor() {
        this.cityRepository = cityRepository;
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.creatCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong on service side");
            throw(error);
        }
    }

    async deleteCity(cityId){
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong on service side");
            throw(error);
        }
    }

    async updateCity(cityId, data){
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong on service side");
            throw(error);
        }
    }

    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong on service side");
            throw(error);
        }
    }
}