import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUserObj, FunctionUpdateUser } from "../Redux/Action";

const Updateuser = () => {
  const [id, idchange] = useState(0);
  const [name, namechange] = useState("");
  const [designation, designationchange] = useState("");
  const [manager, managerchange] = useState("");
  const [doj, dojchange] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();

  const userobj = useSelector((state) => state.user.userobj);

  const handlesubmit = (e) => {
    e.preventDefault();
    const userobj = { id, name, designation, manager, doj };
    dispatch(FunctionUpdateUser(userobj, id));
    navigate("/user");
  };

  useEffect(() => {
    dispatch(FetchUserObj(code));
  }, []);

  useEffect(() => {
    if (userobj) {
      idchange(userobj.id);
      namechange(userobj.name);
      designationchange(userobj.designation);
      managerchange(userobj.manager);
      dojchange(userobj.doj);
    }
  }, [userobj]);

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "left" }}>
            <h2>Add User</h2>
          </div>
          <div className="card-body" style={{ textAlign: "left" }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Id</label>
                  <input
                    value={id || ""}
                    disabled="disabled"
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    value={name || ""}
                    onChange={(e) => namechange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Designation</label>
                  <input
                    value={designation || ""}
                    onChange={(e) => designationchange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Manager</label>
                  <input
                    value={manager || ""}
                    onChange={(e) => managerchange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Date Of Joining</label>
                  <input
                    value={doj || ""}
                    onChange={(e) => dojchange(e.target.value)}
                    className="form-control"
                  >
                    {/* <option value="admin">Admin</option>
                    <option value="staff">Staff</option> */}
                  </input>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: "left" }}>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>{" "}
            |
            <Link className="btn btn-danger" to={"/user"}>
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Updateuser;
