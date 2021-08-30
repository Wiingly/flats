import * as yup from 'yup'

const addSchema = yup.object().shape({
    amount: yup.number().required('Amount is required'),
    flavor: yup.string().required('even if ur a maniac and ate them plain can you at least put that'),
    location: yup.string().required('man i just know you ate them somewhere'),
})

export default addSchema