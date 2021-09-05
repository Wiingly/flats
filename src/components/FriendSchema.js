import * as yup from 'yup'

const friendSchema = yup.object().shape({
    user2_id: yup.number().required('ID is required'),
})

export default friendSchema