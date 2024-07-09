import React from "react";
import { styled } from "@mui/material/styles";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { useTranslation } from "react-i18next";

const Root = styled(FusePageSimple)(({ theme }) => ({
  "& .FusePageSimple-header": {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.divider,
  },
  "& .FusePageSimple-content": {},
  "& .FusePageSimple-sidebarHeader": {},
  "& .FusePageSimple-sidebarContent": {},
}));

function Environment3D() {
  const { t } = useTranslation("environment3DPage");

  return (
    <Root
      header={
        <div className="p-24">
          <h4>{t("TITLE")}</h4>
        </div>
      }
      content={
        <div className="p-24">
          <h4>3D Environment Content</h4>
          <br />
          {/* Adicione aqui o seu código para renderizar o ambiente 3D */}
        </div>
      }
    />
  );
}

export default Environment3D;
