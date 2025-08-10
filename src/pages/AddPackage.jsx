import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import PackageForm from '../components/PackageForm';

const AddPackage = () => {

  const {user} = useContext(AuthContext)

    return (
      <div className="max-w-3xl mx-auto p-4 mt-20 bg-base-300 mb-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Tour Package</h2>
 <PackageForm user={user}></PackageForm>
    </div>
    );
};

export default AddPackage;