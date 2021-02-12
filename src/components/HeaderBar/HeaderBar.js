import React, { useEffect } from "react";
import { Flex, Image } from "rebass";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import BinarLogo from "../../_assets/logo-binarapps.svg";
import { LogoutIcon } from "../../_assets/icons/logoutIcon";

const HeaderWrapper = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 76px;
  width: 100vw;
  background-color: white;
  box-shadow: rgba(4, 4, 4, 0.3) 0px 2px 8px 0px;
`;

const LogoContainer = styled(Flex)`
  margin-left: 40px;
  align-items: center;
`;

const UserBox = styled(Flex)`
  align-items: center;
  margin-left: auto;
  margin-right: 40px;
`;

const NameBox = styled(Flex)`
  font-weight: 600;
  color: #4919aa;
`;

const LogoutBox = styled(Flex)`
  align-items: center;
  margin-left: 10px;
  width: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const HeaderBar = inject(
  "userStore",
  "wordsStore"
)(
  observer(
    ({
      history,
      userStore: { checkUserStatus, logout, userName },
      wordsStore: { clearStore }
    }) => {
      useEffect(() => {
        const user = checkUserStatus();
        if (!user && location.pathname !== "/") {
          history.push("/");
        }
      }, []);

      const handleLogout = () => {
        logout();
        clearStore();
        history.push("/");
      };

      return (
        <HeaderWrapper>
          <LogoContainer>
            <Link to="/">
              <Image width="130px" src={BinarLogo} />
            </Link>
          </LogoContainer>
          {userName && (
            <UserBox>
              <NameBox>User: {userName}</NameBox>
              <LogoutBox onClick={() => handleLogout()}>
                <LogoutIcon />
              </LogoutBox>
            </UserBox>
          )}
        </HeaderWrapper>
      );
    }
  )
);

export default HeaderBar;
