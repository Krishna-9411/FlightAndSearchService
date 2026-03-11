const { City } = require('../models/index');

class cityRepository {
    async createCity ({ name }){
        try{
            const city = await City.create({ name });
            return city;
        }
        catch(error){
            throw {error};
        }
    }

    async deleteCity (cityId){
        try{
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        }
        catch(error){
            throw {error};
        }
    }

    async updateCity(cityId, data){
        try {
            const city = City.update(data, {
                where: {
                    id: cityId
                }
            });
        } catch (error) {
            
        }
    }

    async getCity (cityId){
        try {
            const city = await City.findone({
                where: {
                    id: cityId
                }
            });
            return city;
        } catch (error) {
            throw {error};
        }
    }
}
module.exports = cityRepository;