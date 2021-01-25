import React, {
    FunctionComponent,
    ReactElement,
    useEffect,
    useState,
    useCallback,
    useRef,
} from 'react';

interface PropsType {
    PropA: string;
}

const WithAuth: FunctionComponent<PropsType> = ({ PropA }): ReactElement => {
    const ref = useRef<HTMLDivElement>();
    const [visiable, setVisiable] = useState<boolean>();

    const hide = useCallback(() => {
        setVisiable(false);
    }, []);

    useEffect(() => {
        if (visiable) {
            console.log('visiable', visiable);
        }
        setVisiable(true);
    }, [visiable]);

    return (
        <>
            <div className="wrap" ref={ref}>
                {PropA}
            </div>
        </>
    );
};

export default WithAuth;
