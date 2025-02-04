import { useState } from 'react'





const SavedCountries = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        bio: ''

    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let dataObj = formData;
        console.log(dataObj);
        setFormData({ name: '', email: '', country: '', bio: '' });

    };



    return (
        <>
            <form className='formDataStyle' onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
                <label htmlFor='email'>Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
                <label htmlFor='text'>Country</label>
                <input type="text" name="country" id="country" value={formData.country} onChange={handleChange} />
                <h3>Message</h3>
                <textarea value={formData.bio} onChange={handleChange} name="bio" id="bio" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}



export default SavedCountries;

