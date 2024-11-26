import { fireEvent, render, screen } from '@testing-library/react-native';

import { SelectList } from '@components/SelectList';
import { CityProps } from '@services/getCityByNameService';

describe('Component: SelectList', () => {
  it('Should return city details selected', async () => {
    const data = [
      { id: '1', name: 'Campinas', latitude: 123, longitude: 456 },
      { id: '2', name: 'Campo grande', latitude: 123, longitude: 456 },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/campo/i);

    expect(selectedCity).toBeTruthy();
    fireEvent(selectedCity, 'press');

    expect(onPress).toHaveBeenCalledTimes(1);
  });
  it('Should return empty selected list', () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId('options');

    expect(options.children).toHaveLength(0);
  });
  it('OnPress event should be called', async () => {
    const data = [
      { id: '1', name: 'Campinas', latitude: 123, longitude: 456 },
      { id: '2', name: 'Campo grande', latitude: 123, longitude: 456 },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/campo/i);

    expect(selectedCity).toBeTruthy();
    fireEvent(selectedCity, 'press');

    expect(onPress).toHaveBeenCalledTimes(1);
  });
  it('OnPress event should be called with expected argument', async () => {
    const data = [
      { id: '1', name: 'Campinas', latitude: 123, longitude: 456 },
      { id: '2', name: 'Campo grande', latitude: 123, longitude: 456 },
    ];

    const expectedArgument = data[1];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/campo/i);

    expect(selectedCity).toBeTruthy();
    fireEvent(selectedCity, 'press');

    expect(onPress).toHaveBeenCalledWith(expectedArgument);
  });
});
