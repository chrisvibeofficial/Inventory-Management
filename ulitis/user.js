export const validate = async (data, schema) => {
    try {
        const validateData = await schema.validateAsync(data, {
            abortEarly: false
        })
        return validateData;
        
    } catch (error) {
        throw new Error(error.details[0].message.replace(/"/g));
        
    }
    
}