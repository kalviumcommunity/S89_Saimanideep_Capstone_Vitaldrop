import React, { useState } from 'react';
import './BloodBankLocator.css';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';



const BloodBankLocator = () => {
  console.log('BloodBankLocator component loaded!');

  const [searchLocation, setSearchLocation] = useState('');
  const [selectedBloodType, setSelectedBloodType] = useState('');

  const [bloodBanks] = useState([
    // Delhi NCR
    {
      id: 1,
      name: 'All India Institute of Medical Sciences (AIIMS)',
      address: 'Ansari Nagar, New Delhi, Delhi 110029',
      phone: '+91-11-2658-8500',
      distance: '2.1 km',
      city: 'Delhi',
      state: 'Delhi',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 2,
      name: 'Safdarjung Hospital',
      address: 'Ansari Nagar West, New Delhi, Delhi 110029',
      phone: '+91-11-2673-0000',
      distance: '3.5 km',
      city: 'Delhi',
      state: 'Delhi',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 3,
      name: 'Ram Manohar Lohia Hospital',
      address: 'Baba Kharak Singh Marg, New Delhi, Delhi 110001',
      phone: '+91-11-2336-5525',
      distance: '1.8 km',
      city: 'Delhi',
      state: 'Delhi',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 4,
      name: 'Fortis Hospital Gurgaon',
      address: 'Sector 44, Gurugram, Haryana 122002',
      phone: '+91-124-496-2200',
      distance: '15.2 km',
      city: 'Gurgaon',
      state: 'Haryana',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 5,
      name: 'Max Super Speciality Hospital',
      address: 'Press Enclave Road, Saket, New Delhi, Delhi 110017',
      phone: '+91-11-2651-5050',
      distance: '8.7 km',
      city: 'Delhi',
      state: 'Delhi',
      isOpen: true,
      hasBlood: true
    },

    // Mumbai
    {
      id: 6,
      name: 'King Edward Memorial Hospital',
      address: 'Acharya Donde Marg, Parel, Mumbai, Maharashtra 400012',
      phone: '+91-22-2410-7000',
      distance: '5.3 km',
      city: 'Mumbai',
      state: 'Maharashtra',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 7,
      name: 'Tata Memorial Hospital',
      address: 'Dr Ernest Borges Marg, Parel, Mumbai, Maharashtra 400012',
      phone: '+91-22-2417-7000',
      distance: '6.1 km',
      city: 'Mumbai',
      state: 'Maharashtra',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 8,
      name: 'Lilavati Hospital',
      address: 'A-791, Bandra Reclamation, Bandra West, Mumbai, Maharashtra 400050',
      phone: '+91-22-2640-0888',
      distance: '12.4 km',
      city: 'Mumbai',
      state: 'Maharashtra',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 9,
      name: 'Hinduja Hospital',
      address: 'Veer Savarkar Marg, Mahim, Mumbai, Maharashtra 400016',
      phone: '+91-22-2445-2222',
      distance: '9.8 km',
      city: 'Mumbai',
      state: 'Maharashtra',
      isOpen: true,
      hasBlood: true
    },

    // Bangalore
    {
      id: 10,
      name: 'Nimhans Hospital',
      address: 'Hosur Road, Bangalore, Karnataka 560029',
      phone: '+91-80-2699-5000',
      distance: '7.2 km',
      city: 'Bangalore',
      state: 'Karnataka',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 11,
      name: 'Manipal Hospital',
      address: '98, Rustom Bagh, Airport Road, Bangalore, Karnataka 560017',
      phone: '+91-80-2502-4444',
      distance: '11.5 km',
      city: 'Bangalore',
      state: 'Karnataka',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 12,
      name: 'Apollo Hospital Bangalore',
      address: '154/11, Bannerghatta Road, Bangalore, Karnataka 560076',
      phone: '+91-80-2630-0300',
      distance: '14.3 km',
      city: 'Bangalore',
      state: 'Karnataka',
      isOpen: true,
      hasBlood: true
    },

    // Chennai
    {
      id: 13,
      name: 'Apollo Hospital Chennai',
      address: '21, Greams Lane, Off Greams Road, Chennai, Tamil Nadu 600006',
      phone: '+91-44-2829-3333',
      distance: '4.7 km',
      city: 'Chennai',
      state: 'Tamil Nadu',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 14,
      name: 'Government General Hospital',
      address: 'Park Town, Chennai, Tamil Nadu 600003',
      phone: '+91-44-2819-3000',
      distance: '3.2 km',
      city: 'Chennai',
      state: 'Tamil Nadu',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 15,
      name: 'Fortis Malar Hospital',
      address: '52, 1st Main Road, Gandhi Nagar, Adyar, Chennai, Tamil Nadu 600020',
      phone: '+91-44-4289-2222',
      distance: '8.9 km',
      city: 'Chennai',
      state: 'Tamil Nadu',
      isOpen: true,
      hasBlood: true
    },

    // Hyderabad
    {
      id: 16,
      name: 'Apollo Hospital Hyderabad',
      address: 'Jubilee Hills, Hyderabad, Telangana 500033',
      phone: '+91-40-2360-7777',
      distance: '6.4 km',
      city: 'Hyderabad',
      state: 'Telangana',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 17,
      name: 'Nizam Institute of Medical Sciences',
      address: 'Punjagutta, Hyderabad, Telangana 500082',
      phone: '+91-40-2348-8001',
      distance: '4.8 km',
      city: 'Hyderabad',
      state: 'Telangana',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 18,
      name: 'Care Hospital Banjara Hills',
      address: 'Road No. 1, Banjara Hills, Hyderabad, Telangana 500034',
      phone: '+91-40-6165-6565',
      distance: '7.1 km',
      city: 'Hyderabad',
      state: 'Telangana',
      isOpen: true,
      hasBlood: true
    },

    // Kolkata
    {
      id: 19,
      name: 'Medical College Hospital',
      address: '88, College Street, Kolkata, West Bengal 700073',
      phone: '+91-33-2241-3106',
      distance: '3.7 km',
      city: 'Kolkata',
      state: 'West Bengal',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 20,
      name: 'Apollo Gleneagles Hospital',
      address: '58, Canal Circular Road, Kolkata, West Bengal 700054',
      phone: '+91-33-2320-3040',
      distance: '9.2 km',
      city: 'Kolkata',
      state: 'West Bengal',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 21,
      name: 'AMRI Hospital Salt Lake',
      address: 'JC - 16 & 17, Sector III, Salt Lake City, Kolkata, West Bengal 700098',
      phone: '+91-33-6606-3800',
      distance: '12.5 km',
      city: 'Kolkata',
      state: 'West Bengal',
      isOpen: true,
      hasBlood: true
    },

    // Pune
    {
      id: 22,
      name: 'Ruby Hall Clinic',
      address: '40, Sassoon Road, Pune, Maharashtra 411001',
      phone: '+91-20-2612-7100',
      distance: '5.6 km',
      city: 'Pune',
      state: 'Maharashtra',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 23,
      name: 'Jehangir Hospital',
      address: '32, Sassoon Road, Pune, Maharashtra 411001',
      phone: '+91-20-2605-5000',
      distance: '5.8 km',
      city: 'Pune',
      state: 'Maharashtra',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 24,
      name: 'Deenanath Mangeshkar Hospital',
      address: 'Erandwane, Pune, Maharashtra 411004',
      phone: '+91-20-2712-8888',
      distance: '8.3 km',
      city: 'Pune',
      state: 'Maharashtra',
      isOpen: true,
      hasBlood: true
    },

    // Ahmedabad
    {
      id: 25,
      name: 'Civil Hospital Ahmedabad',
      address: 'Asarwa, Ahmedabad, Gujarat 380016',
      phone: '+91-79-2268-9011',
      distance: '4.2 km',
      city: 'Ahmedabad',
      state: 'Gujarat',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 26,
      name: 'Apollo Hospital Ahmedabad',
      address: 'Plot No 1A, Bhat GIDC, Gandhinagar, Gujarat 382428',
      phone: '+91-79-6670-1000',
      distance: '18.7 km',
      city: 'Ahmedabad',
      state: 'Gujarat',
      isOpen: true,
      hasBlood: true
    },

    // Jaipur
    {
      id: 27,
      name: 'SMS Medical College',
      address: 'JLN Marg, Jaipur, Rajasthan 302004',
      phone: '+91-141-251-8121',
      distance: '6.1 km',
      city: 'Jaipur',
      state: 'Rajasthan',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 28,
      name: 'Fortis Escorts Hospital',
      address: 'Jawahar Lal Nehru Marg, Malviya Nagar, Jaipur, Rajasthan 302017',
      phone: '+91-141-254-7000',
      distance: '9.4 km',
      city: 'Jaipur',
      state: 'Rajasthan',
      isOpen: true,
      hasBlood: true
    },

    // Lucknow
    {
      id: 29,
      name: 'King Georges Medical University',
      address: 'Chowk, Lucknow, Uttar Pradesh 226003',
      phone: '+91-522-2257-450',
      distance: '7.8 km',
      city: 'Lucknow',
      state: 'Uttar Pradesh',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 30,
      name: 'Apollo Hospital Lucknow',
      address: 'Kanpur - Lucknow Rd, Sector B, Bargawan, LDA Colony, Lucknow, Uttar Pradesh 226012',
      phone: '+91-522-671-5000',
      distance: '12.3 km',
      city: 'Lucknow',
      state: 'Uttar Pradesh',
      isOpen: true,
      hasBlood: true
    },

    // Kochi
    {
      id: 31,
      name: 'Amrita Institute of Medical Sciences',
      address: 'AIMS Ponekkara P O, Kochi, Kerala 682041',
      phone: '+91-484-285-1234',
      distance: '8.7 km',
      city: 'Kochi',
      state: 'Kerala',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 32,
      name: 'Lakeshore Hospital',
      address: 'NH 47 Bypass, Maradu, Kochi, Kerala 682304',
      phone: '+91-484-270-1032',
      distance: '11.2 km',
      city: 'Kochi',
      state: 'Kerala',
      isOpen: true,
      hasBlood: true
    },

    // Chandigarh
    {
      id: 33,
      name: 'Post Graduate Institute of Medical Education and Research',
      address: 'Sector 12, Chandigarh 160012',
      phone: '+91-172-274-7585',
      distance: '5.4 km',
      city: 'Chandigarh',
      state: 'Chandigarh',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 34,
      name: 'Government Medical College Hospital',
      address: 'Sector 32, Chandigarh 160030',
      phone: '+91-172-260-1023',
      distance: '7.8 km',
      city: 'Chandigarh',
      state: 'Chandigarh',
      isOpen: true,
      hasBlood: true
    },

    // Bhubaneswar
    {
      id: 35,
      name: 'All India Institute of Medical Sciences Bhubaneswar',
      address: 'Sijua, Patrapada, Bhubaneswar, Odisha 751019',
      phone: '+91-674-247-3999',
      distance: '9.6 km',
      city: 'Bhubaneswar',
      state: 'Odisha',
      isOpen: true,
      hasBlood: true
    },

    // Indore
    {
      id: 36,
      name: 'Choithram Hospital',
      address: 'Manik Bagh Rd, Indore, Madhya Pradesh 452014',
      phone: '+91-731-425-8800',
      distance: '6.3 km',
      city: 'Indore',
      state: 'Madhya Pradesh',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 37,
      name: 'CHL Hospital',
      address: 'A.B Road, Near LIG Square, Indore, Madhya Pradesh 452008',
      phone: '+91-731-471-6200',
      distance: '8.1 km',
      city: 'Indore',
      state: 'Madhya Pradesh',
      isOpen: true,
      hasBlood: true
    },

    // Coimbatore
    {
      id: 38,
      name: 'Kovai Medical Center and Hospital',
      address: 'Avinashi Road, Coimbatore, Tamil Nadu 641014',
      phone: '+91-422-459-9000',
      distance: '7.9 km',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      isOpen: true,
      hasBlood: true
    },

    // Nagpur
    {
      id: 39,
      name: 'Government Medical College',
      address: 'Hanuman Nagar, Nagpur, Maharashtra 440003',
      phone: '+91-712-272-1111',
      distance: '5.7 km',
      city: 'Nagpur',
      state: 'Maharashtra',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 40,
      name: 'Wockhardt Hospital',
      address: '1643, North Ambazari Road, Nagpur, Maharashtra 440010',
      phone: '+91-712-244-7000',
      distance: '9.4 km',
      city: 'Nagpur',
      state: 'Maharashtra',
      isOpen: true,
      hasBlood: true
    },

    // Andhra Pradesh - Visakhapatnam
    {
      id: 41,
      name: 'King George Hospital',
      address: 'Maharanipeta, Visakhapatnam, Andhra Pradesh 530002',
      phone: '+91-891-256-5000',
      distance: '4.2 km',
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 42,
      name: 'Apollo Hospital Visakhapatnam',
      address: 'Arilova, Visakhapatnam, Andhra Pradesh 530040',
      phone: '+91-891-672-7000',
      distance: '8.7 km',
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 43,
      name: 'Care Hospital Visakhapatnam',
      address: 'Ramnagar, Visakhapatnam, Andhra Pradesh 530002',
      phone: '+91-891-399-9999',
      distance: '6.3 km',
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 44,
      name: 'Seven Hills Hospital',
      address: 'Rockdale Layout, Visakhapatnam, Andhra Pradesh 530017',
      phone: '+91-891-271-1111',
      distance: '7.8 km',
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },

    // Andhra Pradesh - Vijayawada
    {
      id: 45,
      name: 'Government General Hospital Vijayawada',
      address: 'Hospital Road, Vijayawada, Andhra Pradesh 520001',
      phone: '+91-866-257-3939',
      distance: '3.5 km',
      city: 'Vijayawada',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 46,
      name: 'Manipal Hospital Vijayawada',
      address: 'NH-5, Tadepalli, Vijayawada, Andhra Pradesh 522501',
      phone: '+91-863-235-1235',
      distance: '12.1 km',
      city: 'Vijayawada',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 47,
      name: 'Ramesh Hospitals',
      address: 'Governorpet, Vijayawada, Andhra Pradesh 520002',
      phone: '+91-866-242-4242',
      distance: '5.7 km',
      city: 'Vijayawada',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 48,
      name: 'Andhra Hospital',
      address: 'Ring Road, Vijayawada, Andhra Pradesh 520008',
      phone: '+91-866-257-1020',
      distance: '8.4 km',
      city: 'Vijayawada',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },

    // Andhra Pradesh - Tirupati
    {
      id: 49,
      name: 'Sri Venkateswara Institute of Medical Sciences',
      address: 'Alipiri Road, Tirupati, Andhra Pradesh 517507',
      phone: '+91-877-228-7777',
      distance: '6.9 km',
      city: 'Tirupati',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 50,
      name: 'Apollo Hospital Tirupati',
      address: 'Bypass Road, Tirupati, Andhra Pradesh 517501',
      phone: '+91-877-250-1000',
      distance: '9.2 km',
      city: 'Tirupati',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 51,
      name: 'Balaji Institute of Surgery',
      address: 'Renigunta Road, Tirupati, Andhra Pradesh 517506',
      phone: '+91-877-225-5533',
      distance: '7.6 km',
      city: 'Tirupati',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },

    // Andhra Pradesh - Guntur
    {
      id: 52,
      name: 'Government General Hospital Guntur',
      address: 'Collectorate Road, Guntur, Andhra Pradesh 522003',
      phone: '+91-863-233-4455',
      distance: '4.8 km',
      city: 'Guntur',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 53,
      name: 'NRI Medical College Hospital',
      address: 'Chinakakani, Guntur, Andhra Pradesh 522503',
      phone: '+91-863-234-5678',
      distance: '15.3 km',
      city: 'Guntur',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },

    // Andhra Pradesh - Kakinada
    {
      id: 54,
      name: 'Government General Hospital Kakinada',
      address: 'Main Road, Kakinada, Andhra Pradesh 533001',
      phone: '+91-884-238-2222',
      distance: '5.1 km',
      city: 'Kakinada',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 55,
      name: 'Konaseema Institute of Medical Sciences',
      address: 'Amalapuram, East Godavari, Andhra Pradesh 533201',
      phone: '+91-883-255-5000',
      distance: '18.7 km',
      city: 'Kakinada',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },

    // Andhra Pradesh - Nellore
    {
      id: 56,
      name: 'Government General Hospital Nellore',
      address: 'Trunk Road, Nellore, Andhra Pradesh 524001',
      phone: '+91-861-232-1111',
      distance: '6.4 km',
      city: 'Nellore',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 57,
      name: 'Narayana Medical College Hospital',
      address: 'Chinthareddypalem, Nellore, Andhra Pradesh 524003',
      phone: '+91-861-230-7777',
      distance: '11.8 km',
      city: 'Nellore',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },

    // Andhra Pradesh - Kurnool
    {
      id: 58,
      name: 'Government General Hospital Kurnool',
      address: 'Hospital Road, Kurnool, Andhra Pradesh 518001',
      phone: '+91-851-425-5000',
      distance: '5.9 km',
      city: 'Kurnool',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },
    {
      id: 59,
      name: 'Kurnool Medical College Hospital',
      address: 'Kurnool Medical College, Kurnool, Andhra Pradesh 518002',
      phone: '+91-851-425-8888',
      distance: '7.2 km',
      city: 'Kurnool',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    },

    // Andhra Pradesh - Anantapur
    {
      id: 60,
      name: 'Government General Hospital Anantapur',
      address: 'Hospital Road, Anantapur, Andhra Pradesh 515001',
      phone: '+91-855-224-4000',
      distance: '4.7 km',
      city: 'Anantapur',
      state: 'Andhra Pradesh',
      isOpen: true,
      hasBlood: true
    }
  ]);

  const bloodTypes = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];

  const filteredBanks = bloodBanks.filter(bank => {
    const searchTerm = searchLocation.toLowerCase();
    const matchesSearch = !searchLocation ||
      bank.name.toLowerCase().includes(searchTerm) ||
      bank.address.toLowerCase().includes(searchTerm) ||
      bank.city.toLowerCase().includes(searchTerm) ||
      bank.state.toLowerCase().includes(searchTerm);

    return matchesSearch;
  });

  const callBloodBank = (phone) => {
    window.open(`tel:${phone}`);
  };

  const getDirections = (bank) => {
    const destination = encodeURIComponent(bank.address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
  };

  return (
    <>
      <NavBar showContact={true} />
      <div className="blood-bank-locator">
        <div className="header">
          <h1>Find Blood Banks</h1>
          <p>Locate nearby blood banks quickly and easily</p>
        </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search by city, state, or hospital name (e.g., Delhi, Mumbai, AIIMS)..."
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          className="search-input"
        />

        <select
          value={selectedBloodType}
          onChange={(e) => setSelectedBloodType(e.target.value)}
          className="blood-type-select"
        >
          <option value="">All Blood Types</option>
          {bloodTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="blood-banks-list">
        {filteredBanks.map(bank => (
          <div key={bank.id} className="blood-bank-card">
            <div className="bank-header">
              <div className="bank-title-section">
                <h3 className="bank-name">{bank.name}</h3>
                <span className="location-badge">{bank.city}, {bank.state}</span>
              </div>
              <span className="distance-badge">{bank.distance}</span>
            </div>

            <p className="bank-address">{bank.address}</p>

            <div className="bank-status">
              <span className={`status ${bank.isOpen ? 'open' : 'closed'}`}>
                {bank.isOpen ? '● Open' : '● Closed'}
              </span>
              <span className={`blood-availability ${bank.hasBlood ? 'available' : 'unavailable'}`}>
                {bank.hasBlood ? '✓ Blood Available' : '✗ No Blood Available'}
              </span>
            </div>

            <div className="bank-actions">
              <button
                className="btn-call"
                onClick={() => callBloodBank(bank.phone)}
              >
                📞 Call
              </button>
              <button
                className="btn-directions"
                onClick={() => getDirections(bank)}
              >
                🗺️ Directions
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredBanks.length === 0 && (
        <div className="no-results">
          <div className="no-results-icon">🏥</div>
          <h3>No blood banks found</h3>
          <p>Try searching with different keywords</p>
        </div>
      )}
      </div>
    </>
  );
};

export default BloodBankLocator;
