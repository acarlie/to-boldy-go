/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { updateOpacity, theme } from '../theme'
import { StyleRecord } from '../utilities'

interface ModalProps {
    children: React.ReactNode
    isOpen: boolean
    title: string
    toggle: () => void
}

const modalStyles: StyleRecord = {
    modal: css`
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    `,
    title: css`
        font-weight: ${theme.fontWeight.semibold};
        line-height: ${theme.lineHeight.heading};
        font-size: ${theme.fontSize.h200};
        color: ${theme.fontColor.heading};
    `,
    wrapper: css`
        align-items: center;
        backdrop-filter: blur( 6.5px );
        -webkit-backdrop-filter: blur( 6.5px );
        background: ${updateOpacity(theme.color.neutral100, .8)};
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        height: 100vh;
        justify-content: center;
        left: 0;
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 100;
    `,
}

/**
 * @TODO Accessibility: Focus trapping 
 */
export const Modal = ({ isOpen, toggle, title, children }: ModalProps) => {
    return (
        <div role='dialog' aria-modal='true' css={modalStyles.wrapper} style={{ display: isOpen ? 'flex' : 'none' }}>
            <div css={modalStyles.modal}>
                <h2 css={modalStyles.title}>{title}</h2>
                {children}
            </div>
        </div>
    )
}