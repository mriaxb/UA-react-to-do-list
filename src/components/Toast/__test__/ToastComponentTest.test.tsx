import { beforeAll, describe, expect, it } from "vitest";import { Toast } from "..";
import { render, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import { api } from "../../../configs/api";


const mock = new MockAdapter(api);

describe("<Toast Component>", () => {
    describe('Toast', () => {
        beforeAll(() => {
            mock.reset();
        });

        it('Deve renderizar toast com mensagem de sucesso', () => {
            const message = 'Success message';
            const type = 'success';

            render(<Toast message={message} type={type} />);

            const toastElement = screen
                .findByText(/Success message/i);

            expect(toastElement).not.toBeNull();
        });

        it('Deve renderizar toast com o tipo de success', () => {

            const message = 'Success message';
            const type = 'success';

            render(<Toast message={message} type={type} />);

            const toastElement = screen
                .findByText(/success/i);

            expect(toastElement).not.toBeNull();
        });

        it('Deve renderizar toast com o tipo de danger', () => {

            const message = 'Success message';
            const type = 'danger';

            render(<Toast message={message} type={type} />);

            const toastElement = screen
                .findByText(/danger/i);

            expect(toastElement).not.toBeNull();
        });

    });
    
});