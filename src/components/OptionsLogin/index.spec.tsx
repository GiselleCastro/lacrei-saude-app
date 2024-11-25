import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { OptionsLogin } from './index';

describe('OptionsLogin', () => {
    it('should render successful', () => {

        render(<OptionsLogin isVisible={true} />);

        const mainElement = screen.getByTestId('options-login')

        expect(mainElement).toBeVisible();

    })

    it('should do not render', () => {

        render(<OptionsLogin isVisible={false} />);

        const mainElement = screen.getByTestId('options-login')

        expect(mainElement).not.toBeVisible();

    })
});

