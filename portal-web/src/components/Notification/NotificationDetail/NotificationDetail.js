import {
  CardColumns,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge,
  Button
} from "reactstrap";
import { getDate } from "../../../utils/util-service";
import "./NotificationDetail.css";

const NotificationDetail = (props) => {
  return (
    <CardColumns>
      {props.notificationData &&
        props.notificationData.map((data, key) => {
          return (
            <Card key={key} className="mb-2" color={!data.readDate && "danger"} outline>
              <CardBody>
                <CardTitle tag="h5">
                  {data.title}
                  <span className={"float-end"}>
                  {!data.readDate && <Badge color="danger">NEW</Badge>}
                  </span>
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="p">
                  Created on: {getDate(data.createdDate)}
                </CardSubtitle>
                <CardText>{data.description}</CardText>
                {!data.readDate && <Button onClick={() => props.markAsReadNotification(data.notificationId)} outline>Mark as read</Button>}
              </CardBody>
            </Card>
          );
        })}
    </CardColumns>
  );
};

export default NotificationDetail;
