import GetRandomUser from "../../Utility/API";

const GetRandomContact = async (props) => {
  const responseFromAPI = await GetRandomUser();

  return props.handleAddRandomContact({
    Name: responseFromAPI.data.first_name + " " +
          responseFromAPI.data.last_name,
    Email: responseFromAPI.data.email,
    Phone: responseFromAPI.data.phone_number
  });
};

const AddRandomContact = (props) => {
  return (
    <div>
      <button
        className="btn btn-success form-control"
        onClick={() => GetRandomContact(props)}
      >
        Add random contact
      </button>
    </div>
  );
};

export default AddRandomContact;
