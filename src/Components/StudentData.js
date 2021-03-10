import CSVReader from 'react-csv-reader';

const StudentData = (props) => {
  return (
    <CSVReader onFileLoaded={(data) => console.log(data)} />
  )
}

export default StudentData;
