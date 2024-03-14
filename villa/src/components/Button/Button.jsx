import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { IoMdMail } from "react-icons/io";

function Buttons() {
  return (
    <>
        <div>
            <Badge
              className="bg-danger z-2 fs-6 pt-2"
              style={{ borderRadius: "50%", height:"35px", width:"35px"  }}
            >
              <IoMdMail />
            </Badge>
        </div>
      <Button variant="dark" className="mt-2" style={{ borderRadius: "50px" }}>
        Schedule a visit
      </Button>{" "}
    </>
  );
}
export default Buttons;
