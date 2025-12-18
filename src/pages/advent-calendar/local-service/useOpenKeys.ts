import { useState } from "react";
import { AdventLocalService } from ".";

export default function useOpenKeys() {
  const getOpenKeys = () => {
    const keys = AdventLocalService.getOpenKeys();
    return keys;
  };
  const [openKeys, setOpenKeys] = useState(getOpenKeys());
  const setOpenKey = (key: number) => {
    const allKeys = [...openKeys, key];
    AdventLocalService.setOpenKeys(allKeys);
    setOpenKeys(allKeys);
  };
  return { openKeys, setOpenKey, getOpenKeys };
}
