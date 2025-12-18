import { memo, useCallback, useState, type FC } from "react";
import { Card, message, Typography } from "antd";
import { mapDate } from "../../../utils/Mappers";
import { isDateAvailable } from "./utils";
import type { MasonryItemType } from "antd/es/masonry/MasonryItem";
import type { Present } from "../mock-data/presentItems";

import styles from "../AdventCalendar.module.scss";
import useOpenKeys from "../local-service/useOpenKeys";

interface PresentCardProps {
  item: MasonryItemType<Present>;
}

const PresentCard: FC<PresentCardProps> = ({ item: { data } }) => {
  const { openKeys, setOpenKey } = useOpenKeys();
  const [opened, setOpened] = useState(openKeys.includes(data.id));

  const handleClick = useCallback(() => {
    if (!isDateAvailable(data.date)) {
      return message.warning(
        `🎄🎄 Эта карточка откроется ${mapDate(data.date)} 🎄🎄`
      );
    }
    setOpenKey(data.id);
    setOpened(true);
  }, [data, setOpenKey]);

  const url = `../../../../src/assets/present/${data.name}.png`;
  const cardClassName = `${styles.presentCard} ${
    !opened ? styles.presentCardClosed : ""
  }`;

  return (
    <Card
      size="small"
      className={cardClassName}
      classNames={{ body: styles.presentCardBody }}
      style={opened ? { height: "5%" } : { height: data.hideSize }}
      onClick={handleClick}
    >
      {opened ? (
        <img src={url} alt={data.name} className={styles.presentCardImg} />
      ) : (
        <Typography.Title level={3} className={styles.presentCardClosedTitle}>
          {mapDate(data.date)}
        </Typography.Title>
      )}
    </Card>
  );
};

export default memo(PresentCard);
