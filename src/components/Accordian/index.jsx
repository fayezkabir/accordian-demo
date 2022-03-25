import React, { useState } from "react";

import styles from "./style.module.css";


const Accordion = ({ title, children, defaultOpen = false, fullWidth = false }) => {
    const [isOpen, setOpen] = useState(defaultOpen);
    return (
        <div className={[styles.accordionwrapper,fullWidth && styles.fullWidth ].join(" ")}>

            <div
                className={[styles.accordiontitle, isOpen ? styles.open : ""].join(" ")}
                onClick={() => setOpen(!isOpen)}
            >
                {title}
            </div>
            <div className={[styles.accordionitem, !isOpen ? styles.collapsed : ""].join(" ")}>
                <div className={styles.accordioncontent}>{children}</div>
            </div>
        </div>
    );
};
export default Accordion;