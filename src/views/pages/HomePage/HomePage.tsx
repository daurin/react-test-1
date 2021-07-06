import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import GetPackageUseCase from '../../../domain/getPackages/GetPackageUseCase';
import Package from '../../../domain/getPackages/package';

export default function HomePage() {
    const [packages, setPackages] = useState<Array<Package>>([]);

    const history = useHistory();

    useEffect(() => {
        new GetPackageUseCase().call(sessionStorage.getItem('username') || '')
            .then(async (packages: Array<Package>) => {
                setPackages(packages);
            });
    }, []);

    return (
        <div
            className="table-responseive"
        >
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Price to pay</th>
                        <th scope="col">supplier</th>
                        <th scope="col">courier</th>
                        <th scope="col">Courier tracking</th>
                        <th scope="col">Internal tracking</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map((item: Package) => {
                        return (
                            <tr>
                                <th scope="row">1</th>
                                <td>{item.description}</td>
                                <td>{item.weight}</td>
                                <td>{item.priceToPay}</td>
                                <td>{item.supplier}</td>
                                <td>{item.courier}</td>
                                <td>{item.courierTracking}</td>
                                <td>{item.internalTracking}</td>
                            </tr>
                        );
                    })}
                </tbody>

                {/* <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody> */}
            </table>
            <button
                className="btn btn-primary btn-lg btn-block"
                style={{
                    marginRight: "50px",
                    float:'right'
                }}
                onClick={(e)=>{
                    localStorage.clear();
                    history.goBack();
                }}
            >
            Signout
        </button>
        </div >
    )
}
