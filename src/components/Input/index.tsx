import React, { useMemo, useRef, useState } from "react";
import { StyledInput, StyledPasswordInput, ShowHideIcon } from "./style";
import type { InputProps, InputRef } from "antd";

const InputIcon = ({
    text,
    onClick,
}: {
    text: string;
    onClick: () => void;
}) => <ShowHideIcon onClick={onClick}>{text}</ShowHideIcon>;

const CustomInput = (props: InputProps) => {
    return <StyledInput {...props} />;
};

const PasswordInput = (props: InputProps) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const inputRef = useRef<InputRef>(null);

    const togglePasswordVisibility = useMemo(() => {
        return passwordVisible ? (
            <InputIcon
                text="Hide"
                onClick={() => {
                    setPasswordVisible((prevState) => !prevState);
                    inputRef.current!.focus({ cursor: "end" });
                }}
            />
        ) : (
            <InputIcon
                text="Show"
                onClick={() => {
                    inputRef.current!.focus({ cursor: "end" });
                    setPasswordVisible((prevState) => !prevState);
                }}
            />
        );
    }, [passwordVisible]);

    return (
        <StyledPasswordInput
            {...props}
            visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
            }}
            ref={inputRef}
            iconRender={(visible) => togglePasswordVisibility}
        />
    );
};

export { CustomInput, PasswordInput };
