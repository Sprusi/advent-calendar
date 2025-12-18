import { Flex, Masonry } from "antd";
import styles from "./AdventCalendar.module.scss";
import PresentCard from "./present-card/PresentCard";
import { PRESENTS_DATA } from "./mock-data/presentItems";
import { useMemo } from "react";

export const AdventCalendar = () => {
  const items = useMemo(
    () =>
      PRESENTS_DATA.map((p) => ({
        key: p.id,
        data: p,
      })),
    []
  );

  return (
    <Flex vertical gap={16} className={styles.background}>
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        gutter={{ xs: 18, sm: 18, md: 24 }}
        items={items}
        itemRender={(item) => <PresentCard item={item} />}
      />
    </Flex>
  );
};
