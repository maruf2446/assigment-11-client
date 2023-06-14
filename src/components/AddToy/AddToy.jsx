import Swal from 'sweetalert2'

const AddToy = () => {
    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const email = form.email.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newToy = { name, quantity, price, email, category, details, photo }
        console.log(newToy)

        // send data to the server
        fetch('https://assigment-11-server.vercel.app/toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className='mt-8 mb-40'>
            <h2 className='text-6xl text-center mb-8'>Add Toys</h2>
            <form onSubmit={handleAddToy}>
                <div className="">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Toy Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Availabe Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="$Price" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="Your Email" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Implement/EngTools/Architecture" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Toy Details" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy photo url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="http/url" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Toy" className="btn btn-block mt-8 btn-primary" />
            </form>
        </div>
    );
};

export default AddToy;