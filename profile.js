function getUserProfile(){
    let userProfile = {
        name: 'Preeti',
        city: 'Delhi',
        mobile: '888888888',
        profession: 'Architect'
    }
    return userProfile;
};

function getUserSubcriptionDetails(){
    let subscription = {
        plan: 'Annual',
        price: '1499',
        validity: '1 Year',
        endDate: '10 July, 2024'
    }

    return subscription;
}

// module.exports = { getUserProfile, getUserSubcriptionDetails };

module.exports = getUserProfile;


// module.exports = getUserSubcriptionDetails;