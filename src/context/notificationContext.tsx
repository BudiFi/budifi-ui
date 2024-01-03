import React, { useMemo, useState } from "react";
import { Text } from "@components/Text";
import { notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
import { Svg } from "@assets/images/svg";
import { CloseNotificationButton } from "@components/container";

const { RedWarningIcon, GreenCheckIcon, CloseDarkIcon } = Svg;

export const NotificationContext = React.createContext(
    {} as INotificationContextProps,
);

type INotificationContextProps = {
    notificationData: INoticationProps;
    updateNotification: (data: INoticationProps) => void;
    openNotification: () => void;
};

type INoticationProps = {
    type: IconTypes;
    title: string;
    message: string;
    placement?: NotificationPlacement;
};

type IconTypes = "success" | "error" | "warning" | "info";

const NotificationContextProvider: React.FC = ({ children }) => {
    const [api, contextHolder] = notification.useNotification();
    const [notificationData, setNotificationData] = useState<INoticationProps>({
        type: "info",
        title: "",
        message: "",
        placement: "topRight",
    });

    const updateNotification = (data: INoticationProps) => {
        setNotificationData(data);
    };
    const renderIcon = (type: IconTypes) => {
        switch (type) {
            case "error":
                return RedWarningIcon;
            case "success":
                return GreenCheckIcon;
            case "info":
                return GreenCheckIcon;
            default:
                return GreenCheckIcon;
        }
    };

    const openNotification = () => {
        const key = `open${Date.now()}`;
        api.open({
            type: notificationData.type,
            message: (
                <Text variant="body" weight="bold">
                    {notificationData.title}
                </Text>
            ),
            description: <Text variant="body">{notificationData.message}</Text>,
            placement: notificationData.placement,
            icon: <img src={renderIcon(notificationData.type)} />,
            key: key,
            closeIcon: (
                <CloseNotificationButton onClick={() => api.destroy(key)}>
                    <img src={CloseDarkIcon} alt="close icon" />
                </CloseNotificationButton>
            ),
            duration: 3,
        });
    };

    const contextValue = useMemo(
        () => ({ notificationData, openNotification, updateNotification }),
        [],
    );

    return (
        <NotificationContext.Provider value={contextValue}>
            {contextHolder}
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationContextProvider;
