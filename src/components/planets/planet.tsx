/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import { PatternOne, PatternTwo, PatternThree, PatternFour } from "./patterns"
import { Pattern, PlanetProps, Hue } from "./planets.definitions"

const absolutePosition = (size: number) => css`
    position: absolute;
    top: ${(100 - size) / 2}%;
    left: ${(100 - size) / 2}%;
    width: ${size}%;
    height: ${size}%;
`

const wrapper = css`
    width: 10rem;
    height: 10rem;
    position: relative;
`

const planet = css`
    border-radius: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const air = css`
    box-shadow: inset 0 0 15px 15px rgba(255, 255, 255, .9);
    mix-blend-mode: screen;
    border-radius: 100%;
`

const atmosphereBase = (opacity: number) => css`
    mix-blend-mode: hard-light;
    border-radius: 100%;
    opacity: ${opacity};
`

const atmosphere1 = (hue: Hue) => css`
    background: linear-gradient(125deg, hsl(${hue}deg, 25%, 80%), hsl(${hue}deg, 100%, 10%));
`

const atmosphere2 = (hue: Hue) => css`
    background: linear-gradient(125deg, hsl(${hue}deg, 100%, 60%), hsl(${hue}deg, 80%, 0%));
`

const atmosphere3 = (hue: Hue) => css`
    background: linear-gradient(125deg, hsl(${hue}deg, 100%, 60%), hsl(${hue}deg, 80%, 0%));
`

// TODO: Better typing
const PatternComponents: Record<Pattern, any> = {
    patternOne: PatternOne,
    patternTwo: PatternTwo,
    patternThree: PatternThree,
    patternFour: PatternFour
}

export const Planet = ({ pattern, hue, light, medium, dark, variance }: PlanetProps) => {
    const PatternComponent = PatternComponents[pattern]
    return (
        <div css={wrapper}>
            <div css={[absolutePosition(70), planet]}>
                <PatternComponent light={light} medium={medium} dark={dark} />
                <div css={[absolutePosition(100), atmosphereBase(.9), atmosphere1(hue)]} />
                <div css={[absolutePosition(100), air]} />
            </div>
            <div css={[absolutePosition(92), atmosphereBase(.4), atmosphere2(hue)]} />
            <div css={[absolutePosition(100), atmosphereBase(.2), atmosphere3(hue)]} />
        </div>
    )
}
